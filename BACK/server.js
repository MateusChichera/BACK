const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

//ROTAS
const clienteRotas = require('./Routers/ClienteRoutes');
const salasRotas = require('./Routers/SalasRoutes');
const planosRotas = require('./Routers/PlanosRoutes');
const HorariosRotas = require('./Routers/HorariosRoutes');

app.use(express.json());
app.use(cors());

app.use(salasRotas);
app.use(clienteRotas);
app.use(planosRotas);
app.use(HorariosRotas);

app.listen(port,()=>`Executando na porta 4001`)