const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('tiny'));

const proxy = require('express-http-proxy');
app.use('/api', proxy('https://api.binance.com'));

app.listen(port, () => {
    console.log('Listening on 3001');
});
