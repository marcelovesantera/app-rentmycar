import Logo from "../Logo";
import MenuBar from "../MenuBar";
import { HeaderStyled } from "./styles";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <MenuBar />
    </HeaderStyled>
  );
};

export default Header;
