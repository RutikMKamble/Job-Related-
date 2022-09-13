const mongoose = require('mongoose');

const admitCardDetails = new mongoose.Schema({
    companyNameTitle: String, 
    examName: String,
    examCity: String,
    admitCartDate:String,
    examDate: String,
    admitCartStatus : String,
    downloadAdmitCard: String
}, {
    timestamps: true
});

module.exports = mongoose.model('admitDetails', admitCardDetails);