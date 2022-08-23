const statusCompraController = require("../controllers/statusCompraController.js");

const router = require("express").Router();

router.post("/statusCompra", statusCompraController.createStatusCompra);
router.get("/statusCompra", statusCompraController.readAllStatusCompra);

router.get("/statusCompra/:id", statusCompraController.readOneStatusCompra);
router.put("/statusCompra/:id", statusCompraController.updateStatusCompra);
router.delete("/statusCompra/:id", statusCompraController.deleteStatusCompra);

module.exports = router;