const mongoose = require('mongoose')

const ManagerModel = mongoose.Schema({
    Name : {
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true
    },
    Provide_Area : {
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
    Age : {
        type : String,
        require : true
    }
})

const Manager = mongoose.model('Manager Model', ManagerModel)

module.exports = Manager