const express = require("express");
const router = express.Router();

// controllers
const {Register, processRegister, destroy, user} = require("../controllers/indexController");
const formValidator = require("../validators/formValidator");

// Formulario
router.get("/", Register)
router.post("/",formValidator ,processRegister)

// Otras vistas
router.get("/user", user)

// cookies
router.post("/user", destroy)
module.exports = router
