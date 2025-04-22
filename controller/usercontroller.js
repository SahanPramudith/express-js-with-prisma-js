const mysql = require('mysql2')
const express = require('express')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahan',
    database: 'sample_prisma'
  })
  
  connection.connect()

const saveUser=(req,res)=>{
    connection.query('INSERT INTO users value( ?, ?, ?)',[req.body.id,req.body.name,req.body.email],(err,row)=>{
        if(err)throw err
        res.send(row)
      })
}

module.exports= {saveUser};