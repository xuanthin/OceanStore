class ProductController {
    //GET /Product
    index(req, res) {
        res.render('clients/product');
    }

    // GET /Product/id
    show(req, res) {
        res.send('product slug');
    }
}
module.exports = new ProductController();
