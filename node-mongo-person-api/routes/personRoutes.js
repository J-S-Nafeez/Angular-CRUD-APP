const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET all people
router.get('/', async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

// POST new person
router.post('/', async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  const newPerson = new Person({ name, age, gender, mobile });
  await newPerson.save();
  res.json({ message: 'Person created', person: newPerson });
});

// PUT update person
router.put('/:id', async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  const updatedPerson = await Person.findByIdAndUpdate(
    req.params.id,
    { name, age, gender, mobile },
    { new: true }
  );
  res.json({ message: 'Person updated', person: updatedPerson });
});

// DELETE person
router.delete('/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: 'Person deleted' });
});

module.exports = router;
