const mongoose = require('mongoose');

const examResultDetails = new mongoose.Schema({
    companyNameTitle: String, 
    examName: String,
    postName: String,
    examCity: String,
    resultDate:String,
    examDate: String,
    resultStatus: String,
    checkResult : String
}, {
    timestamps: true
});

module.exports = mongoose.model('examResultDetails', examResultDetails)