const mongoose = require('mongoose')

const AdminDetails = mongoose.Schema({
    Name : {
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true
    },
    Password : {
        type : String,
        require : true
    },
    City : {
        type : String,
        require : true
    },
    Gender : {
        type : String,
        require : true
    },
    Token : {
        type : String
    }
})

const AdminD = mongoose.model('Admin Model', AdminDetails)

module.exports = AdminD