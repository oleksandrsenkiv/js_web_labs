const Router = require("express");
const router = new Router();
const printerController = require("../controller/printer.controller");

router.post("/printer", printerController.createPrinter);
router.get("/printer", printerController.getAllPrinter);
router.get("/printer/:id", printerController.getOnePrinter);
router.put("/printer", printerController.updatePrinter);
router.delete("/printer/:id", printerController.deletePrinter);
router.get("/printersort", printerController.getSortedPrinter);

module.exports = router;