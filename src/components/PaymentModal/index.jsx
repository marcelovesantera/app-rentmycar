import btnClose from "../../assets/btnClose.svg";
import { RentContext } from "../../context/RentContext";
import { useContext, useEffect, useRef } from "react";
import { ModalBackground } from "../CardCarModal/styles";
import { PayDiv } from "./styles";
import group from "../../assets/group.svg";
import coin from "../../assets/bx_dollar-circle.svg";
import { AuthCarContext } from "../../context/CarContext";

export const PaymentModal = ({ car }) => {
  const { setIsPayModal, setIsModalOpen } = useContext(RentContext);
  const { alugarCarro } = useContext(AuthCarContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsPayModal(false);
        setIsModalOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsPayModal]);

  const closeModal = () => {
    setIsPayModal(false);
    setIsModalOpen(true);
  };

  // const doPay = () => {
  //   setIsPayModal(false);
  // };

  return (
    <>
      <ModalBackground />
      <PayDiv ref={modalRef}>
        <button
          className="btnCloseModal"
          onClick={() => {
            setIsModalOpen();
            closeModal();
          }}
        >
          <img src={btnClose} alt="close" />
        </button>
        <h1>QR CODE - PIX</h1>
        <div className="pixImageBox">
          <img src={group} alt="pix"></img>
        </div>
        <button
          id={car.id}
          className="btnPayment"
          onClick={() => alugarCarro(car)}
        >
          <img src={coin} alt="pagamento"></img>Pagamento efetuado
        </button>
      </PayDiv>
    </>
  );
};
