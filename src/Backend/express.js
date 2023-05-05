const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Import Mongoose package
const mongoose = require('mongoose');
const { API_KEY, HOST, MONGO_CONNECTION } = require('../api');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');



const HASH_VALUE = 10;
const uri = process.env.REACT_APP_MONGO_CONNECTION
if(uri === undefined)
{
  console.log("uri is undefined");
}
else
{
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database:', err));

}



const app = express();
app.use(bodyParser.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  username: String,
  password:String,
  bookmarks:Array,
  date:String,
  
});

// Define a model for the collection
const User = mongoose.model('UserSavedData', userSchema);




const router = express.Router();

router.get('/', (req, res) => {
  res.send();
});

app.post('/', (req, res) => {
  
  const data = req.body;
  console.log(data);
  res.json(data);
})

app.post('/login', async (req, res)=> 
{
  

  const hashedPassword = await bcrypt.hash(req.body.password, HASH_VALUE);
  const data = req.body;
  const user = new User({
    username:req.body.username,
    password:hashedPassword,
    bookmarks:req.body.bookmarks
  });
  user.save();

  res.send();
})

app.use('/', router);

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});