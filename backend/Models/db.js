const mongoose = require('mongoose');

//const mongo_url = process.env.MONGO_CONN;
const mongo_url = "mongodb+srv://singhlavkush2023:VrcLHsGgASXLG4Gy@cluster0.xgfrf9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })