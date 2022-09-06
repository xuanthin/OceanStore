const Account = require('../models/Account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../../env');

class AuthenticationController {
    //GET /authentication: show authentication details
    show(req, res, next) {
        res.render('authentication', { login: true });
    }

    //GET authentication/logout
    async logout(req, res, next) {
        try {
            res.clearCookie('name');
            res.clearCookie('token');
        } catch (err) {
            next(err);
        }
        return res.redirect('/authentication');
    }

    // POST authentication/register
    async register(req, res, next) {
        try {
            //password encryption
            let passwordHashed = await bcrypt.hash(req.body.password, 10);
            req.body.password = passwordHashed;
            const account = await new Account(req.body).save();

            res.cookie('name', account.name, {
                secure: true,
                maxAge: 1000 * 60 * 60 * 24,
            });

            //token
            const token = await jwt.sign(account.toJSON(), SECRET_KEY, {
                expiresIn: '1h',
            });
            res.cookie('token', token, {
                httpOnly: true,
            });
        } catch (err) {
            next(err);
        }
        res.redirect('/');
    }

    //POST authentication/login
    async login(req, res, next) {
        try {
            const account = await Account.findOne({ email: req.body.email });
            if (account) {
                //compare passwords
                const validPassword = await bcrypt.compare(
                    req.body.password,
                    account.password,
                );
                if (validPassword) {
                    res.cookie('name', `${account.name}`, {
                        secure: true,
                        maxAge: 1000 * 60 * 60 * 24,
                    });

                    //token
                    const token = await jwt.sign(account.toJSON(), SECRET_KEY, {
                        expiresIn: '1h',
                    });
                    res.cookie('token', token, {
                        httpOnly: true,
                    });

                    return res.redirect('/');
                }
            }
            return res.redirect('/authentication');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AuthenticationController();
