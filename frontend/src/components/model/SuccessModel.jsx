export function SuccessModel({display , onClose}){
  if(!display) return null ; 
  return <div className = "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
    <div className = "bg-green-500/50 p-2 rounded flex justify-between"> 
    <div className = "font-light"> 
       Account Created Successfully.. 
    </div> 
    <div className = "text-center bg-red-500/60 ml-2 w-12 rounded shadow-md cursor-pointer hover:bg-red-600/50" onClick = {onClose}>
        X
    </div> 
    </div>  
  </div> 
}
