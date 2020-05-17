const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const {mongokey} = require('./keys');

mongoose.connect(mongokey,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log('connected to database');
}).catch(()=>{
  console.log('failed to connect to database');
})


const port = process.env.PORT || 3000;

app.use(cors(),bodyParser.urlencoded({extended:true}),bodyParser.json());

router.post('/contact',(req,res)=>{
  console.log('contact request is recieved',req.body);
  res.send({message:'data recieved succesfuly'});
});

app.use('/',router);


app.listen(port,()=>{
  console.log(`Here the port number :: ${port}`);
});
