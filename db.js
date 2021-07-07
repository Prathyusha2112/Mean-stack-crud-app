const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dapplogixDB', (err) => {
    if (!err) {
        console.log("mongodb successfully connected");
    } else {
        console.log("error identified: " + JSON.stringify(err, undefined, 2))
    }
});

module.exports = mongoose;