import { MenuDiv } from "./styles";
import MenuLoged from "../MenuLogged";
import MenuUnLoged from "../MenuUnLogged";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const MenuBar = () => {
  const { user } = useContext(AuthContext);

  return <MenuDiv>{user ? <MenuLoged /> : <MenuUnLoged />}</MenuDiv>;
};

export default MenuBar;
