const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const Player=sequelize.define('player',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Dob:{
        type:Sequelize.DATE,
        // allowNull:false,
    },
    Photourl:{
        type:Sequelize.TEXT,
        // allowNull:false,
    },
    Birthplace:{
        type:Sequelize.STRING,
        // allowNull:false,
        
    },

    Numberofmatches:{
        type:Sequelize.INTEGER,
        // allowNull:false,
    },
    Score:{
        type:Sequelize.INTEGER,
        // allowNull:false,
    },
    Fifties:{
        type:Sequelize.INTEGER,
        // allowNull:false,
    },
    Centuries:{
        type:Sequelize.INTEGER,
        // allowNull:false,
    },
    Wickets:{
        type:Sequelize.INTEGER,
    
    },
    Average:{
        type:Sequelize.INTEGER,
        
    },
    Description:{
        type:Sequelize.TEXT,
        
    },

})
module.exports=Player