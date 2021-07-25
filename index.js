const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const defaultRouter = require('./routes');
app.use(defaultRouter);

app.listen(3000, ()=>{
  console.log('The app is running at Port : 3000')
})