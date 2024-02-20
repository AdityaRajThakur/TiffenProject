const mongoose = require("mongoose") ;

const url = "mongodb+srv://rajaditya0thakur:dq0P3wkxNQt1sjFS@cluster0.vyrcpnp.mongodb.net/Tiffen" ; 

function connectDB(url){
    mongoose.connect(url).then((res)=>{
        console.log("Connected to database successfully...") ; 
    }).catch((err)=>{
        console.log("Failed to connet to database ") ; 
    })
}

connectDB(url) ;



const UserSchema = new mongoose.Schema({
    username : {type : mongoose.Schema.Types.String } , 
    phone : {type : mongoose.Schema.Types.String ,  unique : true  } , 
    cost : {type : mongoose.Schema.Types.Number   } , 
    price : {type : mongoose.Schema.Types.Number  }  ,
    count : {type : mongoose.Schema.Types.Number  } ,
})

const AdminSchema = new mongoose.Schema({
    username : {type : mongoose.Schema.Types.String , required :true} , 
    password : {type : mongoose.Schema.Types.String ,required : true}  
})



const User = mongoose.model('User' , UserSchema) ; 
const Admin = mongoose.model('Admin' , AdminSchema) ; 

module.exports = {
    User, 
    Admin 
}
