const express = require('express')
const bodyParser = require('body-parser');
const users=require('./route/userRouter/userroueter')
const app = express()
const port = 3000


// Middleware to parse JSON data
app.use(bodyParser.json());

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',users)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})      