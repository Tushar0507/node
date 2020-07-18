const express =require('express')

const route = express.Router()

const users = ["Tushar", "Jaiswal"]

route.get('/users', function(req,res){
 res.send(users)
})

module.exports = route
 