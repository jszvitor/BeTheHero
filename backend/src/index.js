const express = require('express'); // não passo ./ pois o express é um pacote
const routes = require('./routes'); // tenho que informar o ./ p/ que ele ache que o routes é um arquivo
const cors = require('cors'):

const app = express();

// app.use(cors({
//     origin: 'http://controli.io'
// }))
app.use(cors());// todas as aplicações podem acessar nossa aplicação
app.use(express.json());
app.use(routes);



app.listen(3333);
