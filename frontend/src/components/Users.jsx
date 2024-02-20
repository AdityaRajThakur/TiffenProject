import axios from "axios";
import { useEffect, useState } from "react" ; 
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
export function Users(){
  const [username , setUsername] = useState("") ; 
  const [users , setUsers] = useState([]) ; 

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get(`http://localhost:8000/AuntyTiffen/user/bulk/?filter=${username}`); 
      setUsers(res.data.users)
    }
    fetchData() ; 
  } ,[username])

  return <div className = "m-1"> 
    <Header/> 
    <div className = "w-full border" > 
    <input onChange= {(e)=>{
    setUsername(e.target.value) ; 
      }} className = "hover:shadow-md rounded p-2 w-full mt-2" placeholder = "Enter user name "></input> 
    {console.log(username)} 
    </div> 
    <div className = "">
    {users.map(user=><User key = {user._id} user = {user}/>)}
    </div> 
  </div> 
}

function User({user}){
  const navigate = useNavigate() ; 
  return <div className = "mt-3 flex justify-between border rounded mb-2"> 
    <div className = "grid grid-cols-6 gap-4">
      <div className = "bg-green-500/50 shadown-sm w-12 h-12 rounded-full text-center pt-3 text-white"> 
        {user.username.toUpperCase()[0]} 
      </div> 
      <div className = "start-col-2 text-center pt-3 col-span-3">
        {user.username.toUpperCase()}
      </div> 
      <div className = "pt-3 text-center"> 
        {user.count}  
    </div> 
    </div> 
    <div onClick = {()=>{
      navigate(`/update?id=${user._id}&username=${user.username}`) ;  
    }}className = "bg-purple-500/60  shadow-md rounded-full w-20 pt-3 text-white  h-12 pl-4 hover:bg-purple-400/60 cursor-pointer">
        update
    </div> 
  </div> 
}
