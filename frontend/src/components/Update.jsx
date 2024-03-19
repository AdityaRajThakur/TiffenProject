import { useEffect, useState ,useCallback } from "react";
import { useSearchParams } from "react-router-dom"
import { SigninHeader } from "./SigninHeader";
import axios from "axios";

export function Update(){
  const [serachParams] = useSearchParams() ; 
  const [count , setCount] = useState(0) ; 
  const [price , setPrice] = useState(0) ;
  const [preCount , setPrevCount] = useState(0) ;
  const [cost , setCost] = useState(0) ; 
  const id = serachParams.get('id') ; 
  const username = serachParams.get("username") ; 
  const [lastModified , setlastModified] = useState("") ; 
  //console.log(id , " " , username , " ", preCount) ;
  const res = useCallback(()=>{
    const ans  = count * 60 ; 
    setPrice(ans) ;  
  } , [count]); 
  //use  useEffect here to hit the backend for fetching the user and it data. 
  // 
  useEffect(()=>{
    const fetchData = async ()=>{
      const user = await axios({
        method : "get" , 
        url : `http://localhost:8000/AuntyTiffen/user/find?id=${id}`,
      }); 
      
      const date = new Date(user.data['user'].lastModified)
      const res = `${date.getDate()} ${parseInt(date.getMonth()) + 1 } ${date.getFullYear()}` ; 
      console.log(user.data['user']) ;
      console.log(typeof(user.data['user'].lastModified)) ; 
      setCount(()=>user.data['user'].count) ; 
      setPrevCount(()=> user.data['user'].count) ; 
      setCost(()=>user.data['user'].price) ;
      setlastModified(()=>res); 
    }
    fetchData() ; 
  }, []) ; 
  return <div className = "bg-blue-400 pb-10 rounded-md shadow-md border m-2 ">
    <div className = "text-center text-4xl  h-24 pt-9"> 
      <h1> Update info about - {username.toUpperCase()} </h1> 
    </div> 
    <div className = "flex justify-center items-center"> <div className = "bg-green-200 p-1 rounded-md border shadow-md "> Previous Count of Tiffen is {preCount} </div>  </div> 
  <div className = "flex justify-center items-center"> <div className = "bg-green-200 p-1 rounded-md border shadow-md mt-2"> lastModified Date is {lastModified} </div>  </div>
    <div className = "flex justify-center items-center ">  
  <SigninHeader Heading = {`Total Amount Deposited  ` + String(cost)}/>
    <div className = "pr-12 flex ">
    <div className = "mr-10 flex"> 
      <div className = "bg-green-200"> Count of Tiffen </div> 
          <div className = "ml-3 mr-1 bg-red-800/50 text-white rounded-md shadow-md border w-6 h-6 text-center">
            {count}
          </div> 
    </div> 
    <div className = "hover:bg-green-400 cursor-pointer pl-1 h-6 w-12 bg-green-300 rounded-md text-center mr-10" onClick = {()=>{
          setCount((count)=>count -1) ; 
          res() 
        }}> 
      <div>-</div> 
    </div>
    <div className = "hover:bg-green-400 cursor-pointer pl-1 h-6 w-12 bg-green-300 rounded-md text-center" onClick = {()=>{
          setCount((count)=>count + 1) ;
          res() ; 
        }}> 
      <div>+</div> 
    </div>
    </div>
    </div> 
   <div className = "flex justify-center"> <div className = "bg-green-400/70 hover:bg-green-500/70 p-2 cursor-pointer rounded-md shadow-md border-solid text-center" onClick = {async ()=>{
      const res = await axios({
        method : 'put' , 
        url : `http://localhost:8000/AuntyTiffen/user/updateUser?id=${id}`,
        data :{
          count :count
        }
      })
      console.log(res) 
      if(res.status==200){
        console.log("updated user successfully") ; 
      }

    }}> Update Tiffen </div></div>
    <div className = "flex  justify-center mt-10 "><div className = "bg-orange-200 rounded-md shadow-md border ">{price}</div> </div> 
  </div> 
}
