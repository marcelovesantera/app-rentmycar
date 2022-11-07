import styled from "styled-components";

export const PerfilMain = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(89, 86, 86, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .modalInfosDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 18px;
    width: 358px;
    /* height: 500px; */
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);

    .btnCloseModal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -8px;
      left: 160px;
      width: 20px;
      height: 20px;
      border-style: none;
      border-radius: 50%;
      background-color: transparent;

      :hover {
        cursor: pointer;
      }
    }

    .btnImagePerfil {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 128px;
      height: 128px;
      margin-top: -28px;
      border-style: none;
      border-radius: 50%;
      overflow: hidden;

      :hover {
        cursor: pointer;
      }

      img {
        margin-top: -5px;
        height: 135px;
      }
    }

    h1 {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      color: #292929;
    }

    h2 {
      width: 100%;
      height: 10px;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 16px;
      text-align: left;
      color: #292929;
    }

    p {
      width: 100%;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 14px;
      text-align: left;
      color: #292929;
      margin-bottom: 16px;
    }

    .divImagem {
      display: flex;
      flex-direction: column;
      height: 60px;
      width: 100%;
      gap: 12px;

      .btnEdit {
        background-color: transparent;
        border-style: none;
      }

      .userInputs {
        display: flex;
        justify-content: space-between;
        width: 100%;

        input {
          width: 78%;
          height: 48px;
          font-family: "Poppins";
          font-weight: 300;
          font-size: 14px;
          color: #878787;
          padding-left: 10px;
          border-radius: 12px;
          border-style: none;
          background-color: #f4f4f4;
        }

        .btnSalvarImagem {
          width: 20%;
          height: 48px;
          font-family: "Poppins";
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          color: #ffffff;
          border-radius: 12px;
          border-style: none;
          background-color: #1a9988;

          :hover {
            cursor: pointer;
          }
        }
      }
    }

    .listaCarros {
      display: flex;
      justify-content: flex-start;

      width: 100%;
      margin-top: -20px;
      gap: 8px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100px;
        height: 70px;

        border-radius: 8px;

        background-color: aqua;

        overflow: hidden;

        .imgCarro {
          width: inherit;
          height: inherit;
        }

        .btnRemoveCarro {
          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;
          left: 110px;

          width: 24px;
          height: 24px;

          border-style: none;
          border-radius: 50%;

          background-color: var(--color4);
        }
      }
    }
  }
`;
