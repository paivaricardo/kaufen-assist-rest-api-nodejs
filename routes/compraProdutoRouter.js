const compraProdutoController = require("../controllers/compraProdutoController.js");

const router = require("express").Router();

router.post("/compraProduto", compraProdutoController.createCompraProduto);
router.get("/compraProduto", compraProdutoController.readAllCompraProduto);

router.get("/compraProduto/:id", compraProdutoController.readOneCompraProduto);
router.put("/compraProduto/:id", compraProdutoController.updateCompraProduto);
router.delete("/compraProduto/:id", compraProdutoController.deleteCompraProduto);

module.exports = router;