const compraController = require("../controllers/compraController.js");

const router = require("express").Router();

router.post("/compra", compraController.createCompra);
router.get("/compra", compraController.readAllCompra);

router.get("/compra/:id", compraController.readOneCompra);
router.put("/compra/:id", compraController.updateCompra);
router.delete("/compra/:id", compraController.deleteCompra);

module.exports = router;