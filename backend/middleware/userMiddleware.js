const {z} = require("zod") ; 

const UserSchema = z.object({
    username : z.string() , 
    phone : z.string(),  
    cost : z.number(),
    price : z.number(),
    count : z.number()
})

 function userMiddleware(req, res , next){
    const {success} = UserSchema.safeParse(req.body)  ;
    if(!success){
        return res.status(404).json({
            message : "Invalid body parameters", 
        })
    }
    next() ; 
}

module.exports = {
    userMiddleware , 
}
