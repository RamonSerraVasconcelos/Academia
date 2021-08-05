const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect('/instructors')
})

routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

routes.get('/instructors/create', function(req, res){
    return res.render('instructors/create')
})

routes.get('/instructors/edit', function(req, res){
    return res.render('instructors/edit')
})

routes.post('/instructors', function(req, res){
    return res.send(req.body)
})


routes.get('/members', function(req, res){
    return res.render('members/index')
})

routes.get('/members/create', function(req, res){
    return res.render('members/create')
})

routes.get('/members/edit', function(req, res){
    return res.render('members/edit')
})

routes.post('/instructors', function(req, res){
    return res.send(req.body)
})

module.exports = routes