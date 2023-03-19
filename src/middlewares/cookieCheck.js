module.exports = (req, res, next) =>{
    if(req.cookies.cooki){
        req.session.user = req.cookies.cookiee;
    }
    next();
}