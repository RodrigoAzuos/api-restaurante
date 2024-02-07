const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

require('./routes/pratos.js')(app);
require('./routes/pedidos.js')(app);
require('./routes/autenticacao.js')(app);
require('./routes/documentacao.js')(app);
const porta = 3000;

app.listen(porta, console.log(`Aplicacao escutando a porta ${porta}`))