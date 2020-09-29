// const S = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wiki');

// class Page extends S.Model{}

// Page.init({
//     title: {
//         type: S.STRING,
//         allowNull: false  
//     },
//     urltitle: {
//         type: S.STRING,
//         allowNull: false  
//     },
//     content: {
//         type: S.STRING,
//         allowNull: false  
//     },
//     status: {
//         type: S.BOOLEAN,
//         allowNull: false  
//     }
// }, {sequelize: db, modelName: "page"})

// module.exports = Page

// const models = require('../models');
// const router = require('../routes/wiki');
// const Page = models.Page; 
// const User = models.User;

// router.post('/', (req, res)=>{
//     const page = Page.create({
//         title: 
//     })
// })