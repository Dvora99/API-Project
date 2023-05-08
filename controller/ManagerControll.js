const managerModel = require('../model/ManagerModel')

module.exports.InsertManagerData = async (req,res) => {
    // console.log(req.body)
    let ManagerData = await managerModel.create(req.body)

    return res.json({'status':'Success','msg':'Record Insert Successfully'})
}

module.exports.ShowManagerData = async (req,res) => {
    let ShowManager = await managerModel.find({})

    return res.json({'status':'Success','msg':'Record Insert Successfully','Data':ShowManager})
}

module.exports.DeleteManagerData = async (req,res) => {
    // console.log(req.params.id)
    let D = await managerModel.findByIdAndDelete(req.params.id)

    return res.json({'status':'Success','msg':'Record Delete Successfully','Data':D})
}

module.exports.UpdateManagerData = async (req,res) => {
    let update = await managerModel.findByIdAndUpdate(req.params.id,req.body)

    return res.json({'status':'Success','msg':'Record Update Successfully','Data':update})
}