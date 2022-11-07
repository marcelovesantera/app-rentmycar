import { BiCar, BiLogOut } from "react-icons/bi";
import { MenuStyled } from "./styles";
import User from "../../../assets/user-128.png";
import { useContext } from "react";
import { AuthCarContext } from "../../../context/CarContext";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import toast from "react-hot-toast";
const MenuLoged = () => {
  const { openModalCreateCar } = useContext(AuthCarContext);
  const { setUser, user, imagemProfile } = useContext(AuthContext);

  const { openModalProfile } = useContext(ProfileContext);
  const logout = () => {
    toast.success("Logout");
    window.localStorage.clear();
    setUser(null);
  };
  return (
    <MenuStyled>
      <div className="divContainer">
        <button onClick={logout}>
          <BiLogOut size={30} />
          <p>Sair</p>
        </button>
        <button onClick={openModalCreateCar}>
          <BiCar size={30} />
          <p>Cadastrar carro</p>
        </button>
        <button onClick={openModalProfile}>
          {user.imagem === "" ? (
            <img
              className="img-no-img"
              src={User} //imagem que está no perfil pequeno
              alt="imagem de perfil do usuário"
            />
          ) : (
            <div className="btnProfile">
              <img src={imagemProfile} alt="imagem de perfil do usuário" />
            </div>
          )}
          <p>Perfil</p>
        </button>
      </div>
    </MenuStyled>
  );
};
export default MenuLoged;
