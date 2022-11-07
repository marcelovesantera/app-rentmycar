import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { RentContext } from "./RentContext";

export const AuthCarContext = createContext();

const CarContext = ({ children }) => {
  const [isModalCar, setModalCar] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [carRegister, setCarRegister] = useState([]);
  const [carAlugado, setCarAlugado] = useState([]);

  const { setIsPayModal } = useContext(RentContext);

  const openModalCreateCar = () => {
    setModalCar(true);
  };

  const closedModalCreateCar = () => {
    setModalCar(false);
  };

  const token = window.localStorage.getItem("@loginToken");
  const idUser = window.localStorage.getItem("@loginId");

  const createCar = (data) => {
    data.período = [...[], userInput, userInput2];
    data.alugado = false;
    data.userId = idUser;
    data.proprietario = window.localStorage.getItem("@loginProprietario");
    setCarRegister([data, ...carRegister]);

    const usuario = {
      carrosCadastrados: [data, ...carRegister],
    };

    api
      .post("/cars", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Carro cadastrado com sucesso!");
        window.localStorage.setItem("@CarroId", response.id);
        setModalCar(false);
      })
      .catch((err) => {
        toast.error("Erro ao cadastrar carro!");
        console.log(err);
      });

    api
      .patch(`/users/${idUser}`, usuario, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const alugarCarro = (car) => {
    const carro = {
      alugado: true,
    };

    const idCar = car.id;
    api
      .patch(`/cars/${idCar}`, carro, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);

        setCarAlugado([car, ...carAlugado]);

        const usuario = {
          carrosAlugados: [car, ...carAlugado],
        };
        api
          .patch(`/users/${idUser}`, usuario, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });

        setIsPayModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthCarContext.Provider
      value={{
        isModalCar,
        setModalCar,
        openModalCreateCar,
        closedModalCreateCar,
        userInput,
        setUserInput,
        userInput2,
        setUserInput2,
        createCar,
        alugarCarro,
      }}
    >
      {children}
    </AuthCarContext.Provider>
  );
};

export default CarContext;
