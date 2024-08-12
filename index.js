const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const fs = require('fs');
const cors = require('cors');

const logger = require('./config/winston');
const db = require('./db/db');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;
const token = crypto.lib.WordArray.random(64).toString();
const envFile = `TOKEN_SECRET=${token}`;

fs.writeFileSync('./.env', envFile);

dotenv.config();

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

//cors
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(router);

//cors config
db.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
