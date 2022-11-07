import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  background-color: black;
  opacity: 80%;
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
`;

export const CarDiv = styled.div`
  font-family: Poppins, sans-serif;
  background-color: white;
  width: 90vw;
  margin: auto;
  border-radius: 16px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 100%;

  .carImageBox {
    width: 90%;
    margin: auto;
    .carImage {
      margin-top: 15px;
      width: 100%;
      border-radius: 16px;
    }
  }
  .carTitle {
    align-self: center;
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
      text-align: center;
    }

    h2 {
      font-weight: lighter;
      font-size: 18px;
      margin: 0;
      text-align: center;
    }
  }

  .carOwner {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }

  .Right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .Left {
    display: flex;
    align-items: center;
  }

  .carPeriod {
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .carDescription {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      text-align: left;
      display: flex;
    }
  }

  p {
    margin: 0;
    font-weight: 600;
  }

  button {
    border-radius: 18px;
  }

  button {
    border: none;
    color: white;
    background-color: #1a9988;
    height: 50px;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    transition: 0.5s;
  }

  .btnRentCar {
    &:hover {
      background-color: #1f7d71;
    }
  }

  .btnCloseModal {
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
    width: 500px;
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
