import express from 'express';

const app = express();

let num = 10;

app.get('/api/v1/product', (req, res) => {
    res.status(200).json({
        status: "success",
        data: [
            { id: 1, name: "iPhone"},
            { id: 2, name: "Car"}
        ]
    })
})

export default app;