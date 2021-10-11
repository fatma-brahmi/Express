const express = require('express');
const path = require('path');

const app = express();


// set static folder
app.use(express.static(path.join(__dirname, 'public')))
const date =(req,res,next) =>{
  const datee = new Date();
  const day = datee.getDay();
  const hours = datee.getHours();
  ((day < 1 && day > 0) && (hours < 18 && hours >= 9)) ?
  next() : res.send('we are closed')
  }
  
  app.use(date);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
