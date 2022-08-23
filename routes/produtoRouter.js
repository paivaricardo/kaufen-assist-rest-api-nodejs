const produtoController = require("../controllers/produtoController.js");

const router = require("express").Router();

router.post("/produto", produtoController.createProduto);
router.get("/produto", produtoController.readAllProduto);

router.get("/produto/:id", produtoController.readOneProduto);
router.put("/produto/:id", produtoController.updateProduto);
router.delete("/produto/:id", produtoController.deleteProduto);

module.exports = router;