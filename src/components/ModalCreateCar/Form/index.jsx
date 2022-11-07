import { ContainerForm } from "./styles";
import down from "../../../assets/down.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { marcas, modelos } from "../../../services/dadosCarros";
import { AuthCarContext } from "../../../context/CarContext";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { userInput, setUserInput, userInput2, setUserInput2, createCar } =
    useContext(AuthCarContext);

  const [userMarca, setUserMarca] = useState("");

  const filtrarModelos = modelos.filter((elem) => {
    return elem.marca === userMarca;
  });

  const mapear = filtrarModelos.map((elem) => {
    return elem.modelo;
  });

  let years = new Date().getFullYear();
  years = Array.from(new Array(20), (val, index) => (index - years) * -1);

  return (
    <ContainerForm onSubmit={handleSubmit(createCar)}>
      <div className="selects">
        <select
          name="marca"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("marca")}
          onChange={(event) => setUserMarca(event.target.value)}
        >
          <option value="">Marca</option>
          {marcas.map((elem, index) => (
            <option key={index} value={elem}>
              {elem}
            </option>
          ))}
        </select>
        <select
          name="modelo"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("modelo")}
        >
          <option value="">Modelo</option>
          {mapear.map((elem, index) => (
            <option key={index} value={elem}>
              {elem}
            </option>
          ))}
        </select>
        <select
          name="ano"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("ano")}
        >
          <option value="">Ano</option>
          {years.map((elem, index) => (
            <option key={index} value={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
      <div className="dates">
        <p className="texto-de">De:</p>
        <input
          className="input-date"
          type="date"
          name=""
          id=""
          required
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <p className="texto-ate">Até:</p>
        <input
          className="input-date"
          type="date"
          name=""
          id=""
          required
          value={userInput2}
          onChange={(event) => setUserInput2(event.target.value)}
        />
      </div>
      <div className="money-local">
        <div className="money">
          <p className="texto-money">R$</p>
          <input
            className="input-money"
            type="number"
            placeholder="00.00"
            required
            {...register("valor")}
          />
        </div>
        <input
          type="text"
          className="local"
          placeholder="Digite a Cidade"
          {...register("localizacao")}
          required
        />
      </div>

      <input
        type="text"
        className="url"
        placeholder="Cole aqui a url da imagem"
        required
        {...register("imagem")}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Digite uma descrição..."
        required
        {...register("descricao")}
      ></textarea>
      <button className="button-form" type="submit">
        Cadastrar
      </button>
    </ContainerForm>
  );
};

export default Form;
