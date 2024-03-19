import { useCallback, useMemo, useState } from "react"
import { SigninHeader } from "./SigninHeader"
import axios from "axios";
import { SuccessModel } from "./model/SuccessModel";
export function Signin(){
  const [username , setUsername]= useState("") ; 
  const [phone , setPhone] = useState("") ; 
  const [price , setPrice] = useState(0) ; 
  const [count , setCount] = useState(0) ;
  const [cost , setCost] = useState(60) ;
  const [display , setDisplay] = useState(false) ; 
  
  const res  = useMemo(()=>{
    const ans = Math.floor(price / cost) ;
    setCount(ans) ; 
    return ans ; 
  }, [price])
   
  const onHandleClose = useCallback(()=>{
    setDisplay(false) ; 
  } , [display]); 
  return <div className = "w-1/2 mx-auto">
  <div className = "border shadow-md rounded-lg" >
      <SigninHeader Heading = {"SignIn"}/> 
      <div className = "mt-3"> 
      <input className = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-3" type = "text" placeholder = "Enter your name" onChange = {(e)=>{
          setUsername(e.target.value) ; 
        }} /> 
       <input className = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-3" type = "text" placeholder = "Enter you phone number" onChange = {(e)=>{
          setPhone(e.target.value) ; 
        }}/> 
        <input className = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-3" type = "text" placeholder = "Enter price"  onChange = {(e)=>{
          setPrice(parseInt(e.target.value)) ; 
        }}/>    
    <div className = "rounded-md text-center cursor-pointer shadow-md bg-green-200 my-2" onClick = {async ()=>{
            const res = await axios({
            method : 'post' , 
            url : 'http://localhost:8000/AuntyTiffen/user/create',
            data :{
              username, 
              count , 
              price , 
              cost ,
              phone
            }
          });
          if(res.status==200){
            setDisplay(true) ; 
          }else{
            setDisplay(false) ; 
          }
        }}>
      Signin
      
    </div>
    
   <SuccessModel onClose ={onHandleClose} display = {display}/>
      </div> 
  </div> 
  </div> 
}
