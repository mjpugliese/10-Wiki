const express = require("express");
const {db, User, Page } = require("../models");
const router = express.Router();



router.get("/add", (req, res) => {

        res.render('addpage')
    });

router.get("/", (req, res) => {
    // res.send(
    //   Page.findAll()
  
    // );
    //res.redirect('/');
    });

router.post('/', (req, res)=>{
    //res.send('Creado exitosamente')
    res.json(req.body)
    })  

  module.exports = router