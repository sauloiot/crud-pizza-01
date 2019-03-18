const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o banco de dados 
mongoose.connect(
    'mongodb://saulo01:saulo1995@ds129459.mlab.com:29459/nodeapi',
    { useNewUrlParser: true }
    );

requireDir('./src/models');

//rotas 
app.use('/api', require('./src/routes'));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server is runnig on port: ${port}`));
