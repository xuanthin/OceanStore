const homeRouter = require('./home');
const authenticationRouter = require('./authentication');
const productRouter = require('./product');
function route(app) {
    app.use('/authentication', authenticationRouter);
    app.use('/product', productRouter);
    app.use('/', homeRouter);
}
module.exports = route;
