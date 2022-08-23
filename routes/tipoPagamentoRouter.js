const tipoPagamentoController = require("../controllers/tipoPagamentoController.js");

const router = require("express").Router();

router.post("/tipoPagamento", tipoPagamentoController.createTipoPagamento);
router.get("/tipoPagamento", tipoPagamentoController.readAllTipoPagamento);

router.get("/tipoPagamento/:id", tipoPagamentoController.readOneTipoPagamento);
router.put("/tipoPagamento/:id", tipoPagamentoController.updateTipoPagamento);
router.delete("/tipoPagamento/:id", tipoPagamentoController.deleteTipoPagamento);

module.exports = router;