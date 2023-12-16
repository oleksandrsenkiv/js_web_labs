const Router = require("express");
const router = new Router();
const printerController = require("../controller/printer.controller");

router.get("/printer", printerController.getAllPrinter);
router.get("/printers", printerController.getPrinters);
router.get("/printer/:id", printerController.getOnePrinter);

module.exports = router;