const express = require('express')
const route=express.Router();

const {saveUser}=require('../../controller/usercontroller')

route.post('/save',saveUser)

module.exports=route;