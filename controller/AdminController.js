const AdminModel = require('../model/adminModel')
const JWT = require('jsonwebtoken')

module.exports.InsertAdminData = async (req,res) => {
    // console.log(req.body)
    let AdminData = await AdminModel.create(req.body)

    return res.json({'status':'Success','msg':'Record Insert Successfully'})
}

module.exports.LoginAdmin = async ( req,res) => {
    let AdminData = await AdminModel.findOne({Email : req.body.Email})
    if(AdminData && req.body.Password == AdminData.Password)
    {
        var tokenstore = await AdminModel.findByIdAndUpdate(AdminData.id, {
            Token : ''
        }) 
        var data = await AdminModel.findById(AdminData.id);
        if(tokenstore)
        {
            let token = JWT.sign(data.toJSON(), 'Project')
            let store = await AdminModel.findByIdAndUpdate(AdminData.id, {
                Token : token
            })
            return res.json({'status':'Success','data' : token})
        }
        // return res.json({'status':'Success','msg':'Record Insert Successfully','data' :AdminData})
    }
    else{
        return res.json({'status':'Fail','msg':'Data Not Found'})
    }
}

module.exports.LogoutAdmin = async (req,res) => {
    let data = await AdminModel.findByIdAndUpdate(req.params.id,{
        Token : ''
    })
    if(data)
    {
        return res.json({'status':'Success','msg':'Logout Successfully'})
    }
}