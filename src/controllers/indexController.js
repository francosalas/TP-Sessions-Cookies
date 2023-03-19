const {validationResult} = require("express-validator");

module.exports = {

    Register: (req, res) => {
        res.render("index", {
            session: req.session
        })
    },
    
    processRegister: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            
            const {nombre, color, email, edad, recordar} = req.body
           
           req.session.user = {
                nombre,
                email,
                color,
                edad
            }
           
            if(recordar){
                res.cookie("cookiee", req.session.user,                 {
                    expires: new Date(Date.now() + 60000),
                    httpOnly: true                 
                })
            }
            return res.render("index",{
                session: req.session
            })

        }else{
            res.render("index", {
                errors: errors.mapped(), 
                old: req.body
            })
        }
        
    },
    
    user: (req, res) => {
        if(req.session.user !=undefined){
        return res.render("user",{
            session: req.session
        })
        }else {
            res.render("error")
        }
    },

    destroy: (req, res) => {
        req.session.destroy();
        res.cookie("cookiee", null, {maxAge: -1})
        return res.redirect("/")
    }

}