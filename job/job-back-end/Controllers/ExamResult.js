const ExamResultDetails = require('../module/ExamResult');



exports.createResult = async (req, res) => {
    try {
        const saveData = await new ExamResultDetails(req.body).save();
        res.json(saveData);
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getAllResult = async (req, res) => {
    try {
        const result = await ExamResultDetails.find();
        res.json(result)
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getOneResult = async (req, res) => {
    try {
        const result = await ExamResultDetails.find({ _id: req.params.userID });
        res.json(result);
    } catch (err) {
        res.json({ err });
    }
}