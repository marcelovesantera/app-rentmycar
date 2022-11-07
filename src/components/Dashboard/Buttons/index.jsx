
import { BiExit } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi"
// import { BiUserCircle } from "react-icons/bi";
import{BiLogIn} from "react-icons/bi"



const ButtonsLogged =()=>{

    return(
        <>
        <div className="divButtons">
        <button>
          <BiExit size={30} />          
        </button>
        <button>          
          <BiCar size={30} />
        </button>
        <button>          
          <BiLogOut size={30} />
        </button>
      </div>
      
      <div className="divButtons">
      <button>
          <BiLogIn size={30} /> 
             Entrar 
        </button>
      </div>
        </>
      
    )     
}

export default ButtonsLogged