const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const users = require('./database.json');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(users)
app.post('/login',function(req,res){
    let result = users.find(user=>user.email === req.body.email)
    if(result){
        if(result.password === req.body.password){
            res.status(200).send({
                message : "Successfull"
            })
        }
        else{
            res.status(200).send({
                message : " Password Incorrect"
            })
        }
    }
    else{
        res.status(200).send({
            message : " User not found"
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})