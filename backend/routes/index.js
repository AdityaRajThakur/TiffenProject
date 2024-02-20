const {Router}  = require("express") ; 
const {userRouter} = require("../routes/user") ; 
const {adminRouter} = require("../routes/admin") ; 
const rootRouter = Router() ; 

rootRouter.use("/user" , userRouter) ; 
rootRouter.use("/admin" , adminRouter) ; 


module.exports  = {
    rootRouter , 
}


