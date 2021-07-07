const mongoose = require('mongoose');

var Compensation = mongoose.model('Compensation', {
    role: { type: String },
    ctc: { type: Number },
    basic: { type: Number },
    hra: { type: Number },
    lta: { type: Number },
    bonus: { type: Number },

});

module.exports = { Compensation };