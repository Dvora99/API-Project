const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/APIProject')

const database = mongoose.connection;

database.once('open', (err) => {
    if(err)
    {
        console.log('Database Not Connected')
        return false;
    }
    console.log('DataBase Connected')
})

module.exports = database
