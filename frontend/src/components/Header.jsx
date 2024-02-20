import { useNavigate } from "react-router-dom"

export function Header(){
  const navigate = useNavigate() ; 
  return <div className = 'bg-lime-200 flex justify-between p-5 rounded-md mb-2 shadow-lg'> 
    <div className = "bg-green-600/20 border rounded-md shadow-md" onClick ={()=>{
      navigate('/dashboard') ; 
    }}>
      <div className = 'font-bold text-lg hover:cursor-pointer'>
        AuntyTiffen
      </div> 
    </div> 
    <div>
    <div className =" text-black shadow-md bg-lime-300 hover:bg-lime-200 rounded-md w-32 text-center cursor-pointer " onClick = {()=>{
        navigate("/signin") ; 
      }}>
        Create Account
    </div>
    </div> 
  </div> 
}
