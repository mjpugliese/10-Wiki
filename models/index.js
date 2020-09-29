const Sequelize = require('sequelize');
const db = new Sequelize('postgres://equipo@localhost:5432/wiki', {logging: false});

//-- Page Model
class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false  
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false  
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  route: {
    type: Sequelize.VIRTUAL,
    get(){
        return '/wiki/' + this.urlTitle
    }
  },

}, { sequelize: db, modelName: 'page' });
//-- User Model
class User extends Sequelize.Model {}
User.init({
  name: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        //unique: true,
                validate: {
                    isEmail: true
                } 
    }
}, { sequelize: db, modelName: 'user' });
//--
module.exports = {
  Page: Page,
  User: User,
  db: db
};