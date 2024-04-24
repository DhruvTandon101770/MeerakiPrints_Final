const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
require("dotenv/config");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
  res.render('index');
});

// MongoDB Connection
mongoose.connect('mongodb+srv://Webtech:OpenServer@cluster0.w1zlvjz.mongodb.net/?retryWrites=true&w=majority&appName=test/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Function to create a new user
async function createUser(username, password, email) {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log(`User with username '${username}' already exists.`);
      return;
    }

    // Create a new user document
    const newUser = new User({ username, password, email });

    // Save the user to the database
    await newUser.save();

    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Check if the 'root' user exists, and create it if not
User.findOne({ username: 'root' })
  .then((user) => {
    if (!user) {
      createUser('root', 'root', 'root@example.com');
    } else {
      console.log("User 'root' already exists.");
    }
  })
  .catch((err) => console.log(err));

app.use(express.json());

// Route to handle login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Route to handle signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Username already exists' });
    }

    // Create a new user document
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get("/unique", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/services", (req, res) => {
  res.render('services');
});

app.get("/login", (req, res) => {
  res.render('login');
});

app.get("/signup", (req, res) => {
  res.render('signup');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});