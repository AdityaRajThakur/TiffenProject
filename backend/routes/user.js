const {Router} = require("express") ; 
const {User , Admin} = require("../database/db") ; 

const {userMiddleware} = require("../middleware/userMiddleware")

const userRouter = Router() ; 

userRouter.get("/bulk", async  (req ,res)=>{
    const {filter} = req.query  || ""; 
    const users = await User.find({
        username : {
            $regex : filter
        }
    }) ; 
    res.status(200).json({
        users : users, 
    }) ; 
}); 

userRouter.get("/find" , async (req ,res)=>{
  const {id} = req.query ; 
  //console.log(id) ; 
  const user = await User.findOne({
    _id : id 
  }); 
  //console.log(user) ; 
  res.status(200).json({
    user : user 
  })
})

userRouter.post("/create" ,userMiddleware,  async (req , res)=>{
    const username = req.body.username ;  
    const phone  = req.body.phone ; 
    const price = req.body.price ; 
    const cost = req.body.cost ; 
    const count  = req.body.count ; 
  
    try {
      const user = await User.create({
        username , 
        phone , 
        cost , 
        price , 
        count , 
      });
    //console.log(user) ;  
    if(!user){
        return res.status(404).json({
        message : "Failed to create user" 
      });
    } 
    } catch (error) {
      //console.log(error.name , " " , error.code) ; 
      if(error.name === 'MongoServerError' && error.code ===11000){
      return res.status(433).send({
        message : "User already exists"
      })
    }
    }

    res.status(200).json({
        message : "user created succesfully" 
    })

}); 
userRouter.put("/updateUser", (req ,res)=>{
    const {username, count , price , cost } = req.body ; 
    const {id} = req.query ;   
    User.updateOne({
        _id : id
    }, {
        $set : {
            username : username  , 
            count : count , 
            price  : price , 
            cost  : cost, 
        }
    }).catch((err)=>{
        return res.send(404).status({
            message : "Failed to update Data, try after sometime" , 
        })
    })
    res.status(200).json({
        message : "Updated Successfully" , 
    })
})
module.exports = {
    userRouter , 
}
