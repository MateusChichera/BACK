const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

//ROTAS
const clienteRotas = require('./Routers/ClienteRoutes');
const salasRotas = require('./Routers/SalasRoutes');


app.use(express.json());
app.use(cors());

app.use(salasRotas);
app.use(clienteRotas);
app.listen(port,()=>`Executando na porta 3001`)