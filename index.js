import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import router from './routes/index.js';

const app = express();

//middlewaers
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(router)
app.set('view engine','ejs')

//404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Rout not found' });
});

app.listen(4444, () => {
  console.log('http://localhost:4444/');
});
