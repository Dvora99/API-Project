const express = require('express')
const route = express.Router();
const apicontroller = require('../controller/AdminController')

route.post('/InsertAdminData', apicontroller.InsertAdminData)
route.get('/LoginAdmin', apicontroller.LoginAdmin)
route.get('/LogoutAdmin/:id', apicontroller.LogoutAdmin)

route.use('/ManagerInfo', require('./manager'))

module.exports = route