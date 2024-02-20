const express = require("express") ; 
const {rootRouter}  = require("./routes/index") ;  
const cors = require("cors"); 
const app = express() ; 
app.use(cors()) ; 
app.use(express.json()) ; 
app.use("/auntyTiffen/" , rootRouter) ; 


const port = 8000 ; 
app.listen(port , ()=>{
	console.log("Server is listening at " , port ) ; 
}) ; 
