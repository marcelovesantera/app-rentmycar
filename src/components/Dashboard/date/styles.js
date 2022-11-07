import styled from "styled-components";
export const Date = styled.div`
  .dates {
    display: flex;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    border-radius: 18px;
    background-color: rgba(244, 244, 244, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-date {
    margin: 0;
    border: none;
    background-color: transparent;
    width: 80px;
    color: rgba(135, 135, 135, 1);
    font-family: "Poppins", sans-serif;
    font-size: 10px;
  }
  /* input::-webkit-calendar-picker-indicator {
    display: none;
  } */

  .input-date::placeholder {
    font-size: 12x;
  }

  .texto-de {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
  }

  .texto-ate {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
  }
`;
