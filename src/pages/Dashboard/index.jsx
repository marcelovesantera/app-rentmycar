import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { Car } from "./../../components/Dashboard/car";
import DatePicker from "./../../components/Dashboard/date";
import Filters from "./../../components/Dashboard/filters";
import SelectSearch from "./../../components/Dashboard/select-city";
import { Main } from "./styles";
import { BiCalendar } from "react-icons/bi";
import api from "./../../services/api";
import { useState, useEffect, useContext, useMemo } from "react";
import { RentContext } from "../../context/RentContext";
import { CardCar } from "./../../components/CardCarModal";
import { PaymentModal } from "../../components/PaymentModal";
import { DashboardContext } from "../../context/DashboardContext";
import Header from "./../../components/Dashboard/Header";
import { AuthCarContext } from "../../context/CarContext";
import ModalCreateCar from "../../components/ModalCreateCar";
import { AuthContext } from "../../context/AuthContext";
import ModalLogin from "../../components/ModalLogin";
import { toast } from "react-hot-toast";
import { ProfileContext } from "../../context/ProfileContext";
import ModalPerfil from "../../components/Dashboard/ModalPerfil";

const Dashboard = () => {
  const [carros, setCarros] = useState([]);

  const { isModalCar } = useContext(AuthCarContext);
  const { isModalLogin } = useContext(AuthContext);
  const { isProfileOpen } = useContext(ProfileContext);

  const { currentCar, isModalOpen, isPayModal } = useContext(RentContext);
  const [carsFiltrados, setCarsFiltrados] = useState([]);
  const [numItem, setNumItem] = useState(6);

  const {
    currentMarcaCar,
    currentModeloCar,
    currentAnoCar,
    currentCity,
    currentDateFrom,
    currentDateTo,
  } = useContext(DashboardContext);

  useEffect(() => {
    api.get("/cars", {}).then(({ data }) => {
      setCarros(
        data.filter((item) => {
          if (item.alugado === false) {
            return item;
          }
        })
      );
    });
  }, [carros]);
  const showMore = () => {
    if (numItem + 4 <= carros.length) {
      setNumItem(numItem + 4);
    } else {
      setNumItem(carros.length);
      toast.error("Todos os carros disponíveis já foram carregados!");
    }
  };
  const itemsToShow = useMemo(() => {
    return carsFiltrados.length > 0
      ? carsFiltrados
          .slice(0, numItem)
          .map((item) => <Car car={item} key={item.id} />)
      : carros
          .slice(0, numItem)
          .map((item) => <Car car={item} key={item.id} />);
  }, [carros, carsFiltrados, numItem]);

  function dateCheck(Date_1, Date_2, Date_to_check) {
    const D_1 = Date_1.split("/");
    const D_2 = Date_2.split("/");
    const D_3 = Date_to_check.split("/");

    const d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
    const d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
    const d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);

    if (d3 > d1 && d3 < d2) {
      return true;
    } else {
      return false;
    }
  }

  const filtrando = (obj) => {
    const newCarsFilters = obj.filter((elem) => {
      const dateSelect1 = currentDateFrom
        .toString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");
      const dateSelect2 = currentDateTo
        .toString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");

      const dateElem1 = elem.período[0]
        .toString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");

      const dateElem2 = elem.período[1]
        .toString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");

      console.log(dateSelect1, dateSelect2, dateElem1, dateElem2);

      if (
        elem.localizacao == currentCity ||
        elem.marca === currentMarcaCar ||
        elem.modelo === currentModeloCar ||
        parseInt(elem.ano) == currentAnoCar ||
        (dateCheck(dateSelect1, dateSelect2, dateElem1) &&
          dateCheck(dateSelect1, dateSelect2, dateElem2))
      ) {
        return elem;
      }
      return;
    });
    console.log("filtro", newCarsFilters);
    if (newCarsFilters.length === 0) {
      toast.error("Indisponível");
    } else if (newCarsFilters.length == 1) {
      toast.success("Carro disponível");
    } else {
      toast.success("Carros disponíveis");
    }
    return newCarsFilters;
  };

  return (
    <>
      <Header />
      <Main>
        <div className="mainHeader">
          <div className="mainHeaderLocation">
            <SelectSearch />
          </div>
          <div className="mainHeaderFilters">
            <Filters />
          </div>
          <div className="mainHeaderDateSearch">
            <div className="mainHeaderDates">
              <div className="mainHeaderDatesIcon">
                <BiCalendar />
              </div>
              <DatePicker />
            </div>
            <div
              className="mainHeaderSearch"
              onClick={() => {
                console.log(
                  currentCity,
                  currentMarcaCar,
                  currentModeloCar,
                  currentAnoCar
                );
                setCarsFiltrados(filtrando(carros));
              }}
            >
              <FiSearch />
            </div>
          </div>
        </div>
        <main>
          {isModalOpen && <CardCar car={currentCar} />}
          {isPayModal && <PaymentModal car={currentCar} />}
          {isModalCar && <ModalCreateCar />}
          {isModalLogin && <ModalLogin />}
          {isProfileOpen && <ModalPerfil />}
          <ul>
            {itemsToShow.length ? (
              itemsToShow
            ) : (
              <IoReload onClick={(e) => e.preventDefault()} />
            )}
            <button className="loadMoreMobile" onClick={() => showMore()}>
              +
            </button>
          </ul>
        </main>
        <div className="loadMore" onClick={() => showMore()}>
          Carregar mais...
        </div>
      </Main>
    </>
  );
};
export default Dashboard;
