const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');

const PORT = 4000;

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', userRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
