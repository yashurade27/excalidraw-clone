import express from 'express';


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello from HTTP Backend!');
});

app.listen(PORT, () => {
    console.log(`HTTP Backend is running on port ${PORT}`);
});