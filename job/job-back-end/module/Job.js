const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: String,
    postName: String,
    jobDesc:String,
    jobLocation: String,
    StartDate: String,
    endDate: String,
    totalPost: Number,
    education: String,
    onlineApply: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('jobDetails', jobSchema);