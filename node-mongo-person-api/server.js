const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string (with options)
const mongoURI = 'mongodb+srv://ahamednafeez70:Doctor123@cluster0.cidv1rp.mongodb.net/peopleDB?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Person schema & model
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobile: String
});

const Person = mongoose.model('Person', personSchema);

// Routes

// GET all persons
app.get('/person', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// POST create a person
app.post('/person', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.json(newPerson);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create person' });
  }
});

// PUT update a person by id
app.put('/person/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPerson);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update person' });
  }
});

// DELETE a person by id
app.delete('/person/:id', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
