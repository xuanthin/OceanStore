const mongoose = require('mongoose');
const password = '2nZtf26UN9f4SOWJ';
const uri = `mongodb+srv://oceanstore:${password}@oceanstore.xtrhfak.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'OceanStore',
        });
        console.log('Connected to MongoDB ^^');
    } catch (e) {
        console.log('Connect failed');
    }
}

module.exports = { connect };
