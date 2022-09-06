const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../../env');
exports.authorization = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const account = jwt.verify(token, SECRET_KEY);
        req.account = account; //Để dùng cho xác nhậN mua hàng
        next();
    } catch (e) {
        res.clearCookie('token');
        res.clearCookie('name');
        return res.redirect('/authentication');
    }
};
