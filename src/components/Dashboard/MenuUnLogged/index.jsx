import { BiLogIn } from "react-icons/bi";
import { MenuStyled } from "../MenuLogged/styles";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
const MenuUnLoged = () => {
  const { openModalLogin } = useContext(AuthContext);
  return (
    <MenuStyled>
      <div className="divContainer_unloged">
        <button onClick={openModalLogin}>
          <BiLogIn size={30} />
          <p>Entrar</p>
        </button>
      </div>
    </MenuStyled>
  );
};
export default MenuUnLoged;
