const Product = require('../../models/Product');
class HomeController {
    //GET /Home
    index(req, res) {
        const name = req.cookies.name;

        Product.find({})
            .lean()
            .then((product) => res.render('clients/home', { name, product }))
            .catch((err) => next(err));
    }

    // GET /home/id
    show(req, res) {
        res.json(req.account);
    }
}
module.exports = new HomeController();
