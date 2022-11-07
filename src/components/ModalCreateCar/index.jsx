import { Container } from "./styles";
import image from "../../assets/cadastro.jpg";
import { RiCloseCircleLine } from "react-icons/ri";
import Form from "./Form";
import { useContext, useEffect, useRef } from "react";
import { AuthCarContext } from "../../context/CarContext";

const ModalCreateCar = () => {
  const { closedModalCreateCar, setModalCar } = useContext(AuthCarContext);

  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setModalCar(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setModalCar]);

  return (
    <Container>
      <div className="box" ref={modalRef}>
        <div className="div-image">
          <button
            onClick={closedModalCreateCar}
            className="btn-closed-modal-car"
          >
            <RiCloseCircleLine />
          </button>
          <img src={image} alt="" />
        </div>
        <div className="div-form">
          <p>Cadastro de automóvel</p>
          <Form />
        </div>
      </div>
    </Container>
  );
};

export default ModalCreateCar;
