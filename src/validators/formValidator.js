const {check} = require("express-validator");

module.exports = [
    check("nombre").notEmpty().withMessage("Debes ingresar tu nombre"),

    check("color").notEmpty().withMessage("Debes elegir un color"),
    
    check("email").isEmail().withMessage("El email ingresado es invalido"),

    check("edad").notEmpty().isNumeric().isInt({min:1, max:100}).withMessage("ingresar una edad valida")
]