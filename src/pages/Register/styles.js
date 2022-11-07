import styled from "styled-components";

export const RegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    height: 504px;
    width: 90%;
    max-width: 1150px;

    .divImage {
      display: none;
    }

    .registerInputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 310px;
      gap: 10px;

      h1 {
        font-family: "Poppins";
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #292929;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 310px;
        gap: 8px;

        input {
          width: 94%;
          height: 48px;
          font-family: "Poppins";
          font-weight: 300;
          font-size: 14px;
          color: #878787;
          padding-left: 18px;
          border-radius: 18px;
          border-style: none;
          background-color: #f4f4f4;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }

        span {
          font-family: "Poppins";
          font-weight: 00;
          font-size: 10px;
          text-align: right;
          color: #eb5600;
          width: 100%;
          height: 8px;
          margin-top: -6px;
        }

        .btnCadastrar {
          width: 100%;
          height: 48px;
          font-family: "Poppins";
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          color: #ffffff;
          border-radius: 18px;
          border-style: none;
          background-color: #1a9988;

          :hover {
            cursor: pointer;
          }
        }
      }
    }
    .divUserExist {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
      .spanUserExist {
        font-family: "Poppins";
        font-weight: 200;
        font-size: 12px;
        color: #878787;
      }
      .btnBack {
        width: 74px;
        height: 30px;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        border-radius: 10px;
        border-style: none;
        background-color: #727272;
        :hover {
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      justify-content: space-between;
      max-width: 1150px;
      width: 90%;
      height: 504px;
      border-radius: 16px;
      background-color: #ffffff;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
      .divImage {
        display: block;
        width: 50%;
        overflow: hidden;
        border-radius: 16px 0px 0px 16px;
        img {
          height: 100%;
        }
      }
      .registerInputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        width: 50%;
      }
    }
  }
`;
