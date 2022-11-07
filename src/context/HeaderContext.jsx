import { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  
  const [user,setUser]=useState(true)

  const login=()=> {
    
    setUser(true);    
  }



  const logOut=()=> {
    localStorage.clear();
    setUser(null);    
  }


  const registerCar =()=>{
    console.log("abrir modal cadastrar carro")
  }
  const editProfile =()=>{
    console.log(" modal editar perfil")
  }
    
  
  return (
    <UserContext.Provider
    value={{user,setUser,logOut,registerCar,editProfile,login}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


