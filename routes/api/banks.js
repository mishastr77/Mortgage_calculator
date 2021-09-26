const express = require("express");
const router = express.Router();
const { joiBankSchema } = require("../../models/banks");
const { bank: ctrl } = require("../../controllers");
const { validation, controllerWrapper } = require("../../middlewares");

const validationMiddleware = validation(joiBankSchema);

router.get("/", ctrl.getAllBanks);

router.get("/:id", ctrl.getBankByName);

router.post("/", validationMiddleware, controllerWrapper(ctrl.createBank));

router.delete("/:id", ctrl.removeBank);

router.put("/:id", validationMiddleware, ctrl.updateBank);

module.exports = router;
