// connection string for bd 
const Sequelize = require('sequelize');
const CONNECTION_STRING = process.env.DATABASE || 'postgres://postgres:secret@localhost:5432/urls';
const db = new Sequelize(CONNECTION_STRING);

// schema for users table
const User = db.define('users',{
    name:Sequelize.TEXT,
    email:Sequelize.TEXT,
    password:Sequelize.TEXT
})

// schema for urls table
const Direction = db.define('directions',{
    direction:Sequelize.TEXT,
    hash:Sequelize.TEXT
})

module.export = {
    db,User,Direction,
}