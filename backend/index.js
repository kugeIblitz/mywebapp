const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://mongodb:27017/expenses', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: Date
});

const Expense = mongoose.model('Expense', expenseSchema);

app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/expenses', async (req, res) => {
  const { title, amount, date } = req.body;
  console.log(req.body);

  try {
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
