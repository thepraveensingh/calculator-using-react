const express = require('express')
const app = express();
const cors = require('cors');
// Enable CORS for all routes
app.use(cors());
const mongoose = require('mongoose');
const mongoModel = require('./dbconnect/connectDb');
app.use(express.json());

const port = process.env.PORT || 5000; 
app.listen(port,()=>{
  console.log(`Server is listening to port ${port}`);  
})