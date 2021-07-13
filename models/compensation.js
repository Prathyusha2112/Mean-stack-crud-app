const mongoose = require('mongoose');

var Compensation = mongoose.model('Compensation', {
    role: { type: String },
    ctc: { type: Number },
    basic: { type: Number },
    hra: { type: Number },
    lta: { type: Number },
    bonus: { type: Number },
    ctcm: { type: Number },
    basicm: { type: Number },
    hram: { type: Number },
    ltam: { type: Number },
    bonusm: { type: Number },

});



module.exports = { Compensation };
//module.exports = { CompMonth };