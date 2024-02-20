const {Router} = require("express") ; 
const adminRouter = Router() ; 


adminRouter.get("" , (req ,res) =>{
    res.send("this is admin section") ; 
})


module.exports = {
    adminRouter , 
}