const jobModel = require('../module/Job');



exports.createJob = async (req, res) => {
    try {
        const saveData = await new jobModel(req.body).save();
        res.json(saveData);
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getAllJobs = async (req, res) => {
    try {
        const jobData = await jobModel.find();
        res.json(jobData)
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getOneJob = async (req, res) => {
    try {
        const job = await jobModel.find({ _id: req.params.userID });
        res.json(job);
    } catch (err) {
        res.json({ err });
    }
}