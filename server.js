require("dotenv/config");
const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "https://localhost:8081",
};

//  Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Retorna erro 404, se a rota não for encontrada
// app.use((req, res) => {
//   res.status(404).send('Erro 404. Página não encontrada.');
// })

// Rotas
const produtoRouter = require("./routes/produtoRouter");
const statusCompraRouter = require("./routes/statusCompraRouter");
const tipoPagamentoRouter = require("./routes/tipoPagamentoRouter");
const compraRouter = require("./routes/compraRouter");
const compraProdutoRouter = require("./routes/compraProdutoRouter");

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
