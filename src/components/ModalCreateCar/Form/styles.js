import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  select {
    width: 7.187rem;
    height: 2.5rem;
    border-radius: 18px;
    border: none;
    background-color: rgba(244, 244, 244, 1);
    margin-right: 0.375rem;
    color: rgba(135, 135, 135, 1);
    font-size: 14px;
    line-height: 16px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    -webkit-appearance: none;
    font-size: 15px;
    padding-right: 20px;
    background-position: 80px;
  }

  .dates {
    width: 22.5rem;
    height: 2.5rem;
    border-radius: 18px;
    background-color: rgba(244, 244, 244, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .input-date {
    border: none;
    background-color: transparent;
    width: 6.7rem;
    color: rgba(135, 135, 135, 1);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
  /* input::-webkit-calendar-picker-indicator {
    display: none;
  } */

  .input-date::placeholder {
    font-size: 12px;
  }

  .texto-de {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 4px;
  }

  .texto-ate {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 4px;
    margin-left: 48px;
  }

  .div-dates-money {
    display: flex;
    margin-top: 10px;
  }

  .money {
    width: 114px;
    height: 2.5rem;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.375rem;
  }

  .input-money {
    width: 50px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
  }

  .texto-money {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 9px;
    margin-left: 9px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .url {
    height: 2.5rem;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    width: 22.5rem;
    border: none;
    padding-left: 20px;
    margin-top: 10px;
  }

  .url::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  textarea {
    height: 8.125rem;
    width: 22.5rem;
    border: none;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    resize: none;
    margin-top: 10px;
    padding: 10px 20px 10px 20px;
  }

  textarea::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  .button-form {
    width: 22.5rem;
    height: 3rem;
    border-radius: 18px;
    background-color: rgba(26, 153, 136, 1);
    border: none;
    color: rgba(255, 255, 255, 1);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
  }

  .button-form:hover {
    background-color: rgba(31, 125, 113, 1);
  }

  .money-local {
    display: flex;
    margin-top: 10px;
  }

  .local {
    height: 2.5rem;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    border: none;
    padding-left: 20px;
    width: 242px;
  }

  .local::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  @media (max-width: 450px) {
    select {
      background-position: 61px;
      font-size: 11px;
      width: 92px;
      margin-right: 5px;
    }

    .dates {
      width: 18.5rem;
    }

    .texto-ate {
      margin-left: 6px;
    }

    .local {
      width: 173px;
    }

    .url {
      width: 18.5rem;
    }

    textarea {
      height: 6.125rem;
      width: 18.5rem;
    }

    .button-form {
      width: 18.5rem;
    }
  }

  @media (max-width: 346px) {
    select {
      width: 88px;
    }

    .dates {
      width: 17.5rem;
    }

    .texto-ate {
      margin-left: 6px;
    }

    .local {
      width: 162px;
    }

    .money {
      width: 110px;
    }

    .url {
      width: 17.5rem;
    }

    textarea {
      width: 17.5rem;
    }

    .button-form {
      width: 17.5rem;
    }
  }
`;
