import app from './app';
import dotenv from 'dotenv';
dotenv.config();
const fs = require('fs');
const data: string = './database.json';

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Rodando na porta', + PORT));