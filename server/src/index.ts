import express from 'express';
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.post('/mail', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})