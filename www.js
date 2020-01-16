const express = require('express');

const app = express();
app.use('/default', (req, res, next) => res.send('Hello from app!'));
app.listen(3000);
