import styled from "styled-components";

export const PayDiv = styled.div`
  font-family: Poppins, sans-serif;
  max-width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  border-radius: 16px;
  gap: 15px;
  padding: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 28px;
    font-weight: 600;
  }

  .pixImageBox {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
  }

  img {
    object-fit: contain;
  }

  .btnPayment {
    border: none;
    color: white;
    background-color: #1a9988;
    height: 50px;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    transition: 0.5s;
    border-radius: 18px;
    padding: 3px 8px;
    width: 250px;
    &:hover {
      background-color: #1f7d71;
    }
  }

  .btnCloseModal {
    border: none;
    width: 25px;
    height: 25px;
    color: white;
    padding: 0;
    align-self: flex-end;
    background-color: transparent;
    z-index: 1;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  @media (min-width: 769px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .carImageBox {
      width: 100%;
      margin: auto;
      .carImage {
        margin-top: 15px;
        width: 100%;
        border-radius: 16px;
      }
    }
  }
`;
