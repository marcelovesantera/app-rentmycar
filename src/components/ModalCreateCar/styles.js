import styled from "styled-components";

export const Container = styled.div`
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

  .box {
    display: flex;
    flex-direction: column;
  }

  .div-image {
    width: 25.312rem;
    height: 10.75rem;
  }

  img {
    width: 25.312rem;
    height: 10.75rem;
    border-radius: 16px 16px 0 0;
  }

  .div-form {
    width: 25.312rem;
    height: 27.3rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0 0 16px 16px;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-align: center;
    margin-top: 0.4rem;
  }

  .btn-closed-modal-car {
    font-size: 25px;
    border: none;
    background: transparent;
    color: rgb(255, 255, 255);
    position: absolute;
    margin-left: 371px;
    margin-top: 8px;
  }

  @media (max-width: 450px) {
    img {
      width: 20.312rem;
    }

    .div-image {
      width: 20.312rem;
    }

    .div-form {
      width: 20.312rem;
      height: 25.3rem;
    }

    .btn-closed-modal-car {
      margin-left: 283px;
    }
  }

  @media (max-width: 346px) {
    img {
      width: 18.312rem;
      height: 9.75rem;
    }

    .div-image {
      width: 18.312rem;
      height: 9.75rem;
    }

    .div-form {
      width: 18.312rem;
    }

    .btn-closed-modal-car {
      margin-left: 255px;
    }

    p {
      font-size: 22px;
    }
  }
`;
