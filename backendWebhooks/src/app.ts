import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/webhook', (req,res) => {
    console.log(`Webhook Recebido:`, req.body);
    res.status(200).send(`Webhook recebido com Sucesso!!!`)
})

app.listen(process.env.PORT,() => {
    console.log(`servidor iniciado em http://localhost:${process.env.PORT}`);
})