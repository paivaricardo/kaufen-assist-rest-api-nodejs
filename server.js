require("dotenv/config");
const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require('body-parser')

const corsWhiteList = ["https://localhost:8081", "http://localhost:3000"];

let corsOptions = {  
  origin: corsWhiteList,
  credentials: true,
};

//  Middleware
app.use(bodyParser.json());

app.use(express.text());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// Rotas
const produtoRouter = require("./routes/produtoRouter");
const statusCompraRouter = require("./routes/statusCompraRouter");
const tipoPagamentoRouter = require("./routes/tipoPagamentoRouter");
const compraRouter = require("./routes/compraRouter");
const compraProdutoRouter = require("./routes/compraProdutoRouter");
const { json } = require("express");

// Disponibilizar as rotas no servidor
app.use("/api", produtoRouter);
app.use("/api", statusCompraRouter);
app.use("/api", tipoPagamentoRouter);
app.use("/api", compraRouter);
app.use("/api", compraProdutoRouter);

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
