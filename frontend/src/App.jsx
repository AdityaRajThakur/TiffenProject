
import {BrowserRouter as Router , Routes , Route} from "react-router-dom" ; 
import { Header } from "./components/Header";
import {Users} from "./components/Users" ; 
import { Signin } from "./components/Signin";
import { Update } from "./components/Update";

function App() {
  return (
   
    <Router> 
      <Routes> 
       <Route path = "/dashboard" element = {<Users/>} /> 
       <Route path = "/signin" element = {<Signin/>} /> 
       <Route path = "/update" element = {<Update/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
