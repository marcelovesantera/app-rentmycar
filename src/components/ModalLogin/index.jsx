import { Container } from "./styles";
import image from "../../assets/volante.jpeg";
import Form from "./Form";
import { RiCloseCircleLine } from "react-icons/ri";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ModalLogin = () => {
  const navigate = useNavigate();

  const register = () => {
    navigate("/register", { replace: true });
    closedModal();
  };

  const { setIsModalLogin } = useContext(AuthContext);

  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsModalLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalLogin]);

  const closedModal = () => {
    setIsModalLogin(false);
  };

  return (
    <Container>
      <div className="general" ref={modalRef}>
        <div className="card-form">
          <button className="closed-card-form" onClick={closedModal}>
            <RiCloseCircleLine className="svg-closed" />
          </button>
          <p>Login</p>
          <Form />
          <span>Não tem cadastro?</span>
          <button className="btn-cadastrar" onClick={register}>
            Cadastre-se
          </button>
        </div>
        <div className="card-image">
          <img src={image} alt="" />
          <button className="closed" onClick={closedModal}>
            <RiCloseCircleLine className="svg-closed" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ModalLogin;
