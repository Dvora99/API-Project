const express = require('express')
const route = express.Router();
const ManagerControll = require('../controller/ManagerControll')

route.post('/InsertManagerData', ManagerControll.InsertManagerData)
route.get('/ShowManagerData', ManagerControll.ShowManagerData)
route.delete('/DeleteManagerData/:id', ManagerControll.DeleteManagerData)
route.put('/UpdateManagerData/:id', ManagerControll.UpdateManagerData)

module.exports = route