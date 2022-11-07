import { CarDiv, ModalBackground } from "./styles";
import { RentContext } from "../../context/RentContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef } from "react";
import btnClose from "../../assets/btnClose.svg";
import bx_calendar_check from "../../assets/bx_calendar_check.svg";

export const CardCar = ({ car }) => {
  const { setIsModalOpen, setIsPayModal } = useContext(RentContext);
  const { user } = useContext(AuthContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalBackground />
      <CarDiv ref={modalRef}>
        <button className="btnCloseModal" onClick={() => closeModal()}>
          <img src={btnClose} alt="close" />
        </button>
        <div className="carImageBox">
          <img src={car.imagem} alt={car.marca} className="carImage" />
        </div>
        <div className="carTitle">
          {" "}
          <h1>{car.marca}</h1>
          <h2>{car.localizacao}</h2>
        </div>
        <div className="carDetails">
          <div className="carOwner">
            <div className="Right">
              <p>Proprietário:</p> <span>{car.proprietario}</span>
            </div>
            <div className="Left">
              <p>Valor: </p> <span>R${car.valor},00</span>
            </div>
          </div>
        </div>
        <div className="carPeriod">
          <p>Período:</p>
          <span>
            {car.período[0]} a {car.período[1]}
          </span>
        </div>
        <div className="carDescription">
          <p>Descrição:</p>
          <span>{car.descricao}</span>
        </div>
        {user && (
          <button
            className="btnRentCar"
            onClick={() => {
              setIsPayModal(true);
              closeModal();
            }}
          >
            <img src={bx_calendar_check} alt="calendar" />
            Alugar
          </button>
        )}
      </CarDiv>
    </>
  );
};
