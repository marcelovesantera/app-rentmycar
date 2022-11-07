import { useContext, useState } from "react";
import { Filter } from "./styles";
import { DashboardContext } from "../../../context/DashboardContext";
import { marcas, modelos } from "../../../services/dadosCarros";
export default function Filters() {
  let years = new Date().getFullYear();
  years = Array.from(new Array(20), (val, index) => (index - years) * -1);
  const [userMarca, setUserMarca] = useState("");
  const { setMarcaCurrentCar, setModeloCurrentCar, setAnoCurrentCar } =
    useContext(DashboardContext);

  const filtrarModelos = modelos.filter((elem) => {
    return elem.marca === userMarca;
  });
  const mapear = filtrarModelos.map((elem) => {
    return elem.modelo;
  });
  // console.log("modelos", mapear);
  return (
    <Filter>
      <select
        defaultValue="Marca"
        onChange={(i) => {
          //  console.log(i.target.value);
          setMarcaCurrentCar(i.target.value);
          setUserMarca(i.target.value);
        }}
      >
        <option value="Marca" selected disabled>
          Marca
        </option>
        {marcas.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        defaultValue="Modelo"
        onChange={(i) => {
          setModeloCurrentCar(i.target.value);
        }}
      >
        <option value="Modelo" selected disabled>
          Modelo
        </option>
        {mapear.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        defaultValue="Ano"
        onChange={(i) => {
          setAnoCurrentCar(i.target.value);
        }}
      >
        <option value="Ano" selected disabled>
          Ano
        </option>
        {years.map((year, index) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </Filter>
  );
}
