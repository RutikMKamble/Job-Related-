const admitCardModel = require('../module/AdmitCard');



exports.createAdmitCard = async (req, res) => {
    try {
        const saveData = await new admitCardModel(req.body).save();
        res.json(saveData);
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getAllAdmitCard = async (req, res) => {
    try {
        const admitData = await admitCardModel.find();
        res.json(admitData)
    }
    catch (err) {
        res.json({ err })
    }
}

exports.getOneAdmitCard = async (req, res) => {
    try {
        const admitCard = await admitCardModel.find({ _id: req.params.userID });
        res.json(admitCard);
    } catch (err) {
        res.json({ err });
    }
}