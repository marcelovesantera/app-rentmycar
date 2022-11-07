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

  .general {
    display: flex;
  }

  .card-form {
    width: 22.125rem;
    height: 23.187rem;
    background-color: rgb(255, 255, 255);
    border-radius: 10px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    margin-top: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    font-family: "Poppins", sans-serif;
    color: rgba(135, 135, 135, 1);
    margin-bottom: 1.062rem;
  }

  .btn-cadastrar {
    width: 20.25rem;
    height: 3rem;
    border-radius: 18px;
    background-color: rgba(114, 114, 114, 1);
    border: none;
    color: rgba(255, 255, 255, 1);
    line-height: 19px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
  }

  .btn-cadastrar:hover {
    background-color: rgba(81, 81, 81, 1);
  }

  .card-image {
    display: block;
  }

  img {
    width: 22.125rem;
    height: 23.187rem;
    border-radius: 0px 10px 10px 0px;
  }

  .closed {
    position: relative;
    font-size: 25px;
    left: -35px;
    top: -336px;
    border: none;
    background: transparent;
  }

  .closed-card-form {
    display: none;
  }

  @media (max-width: 750px) {
    .card-image {
      display: none;
    }

    .card-form {
      border-radius: 10px;
    }

    .closed-card-form {
      display: block;
      font-size: 25px;
      border: none;
      background: transparent;
      margin-right: -304px;
      margin-top: 10px;
      position: absolute;
    }
  }

  @media (max-width: 371px) {
    .card-form {
      width: 18.125rem;
      height: 22.187rem;
    }
    .btn-cadastrar {
      width: 16.25rem;
    }

    .closed-card-form {
      margin-right: -250px;
    }
  }
`;
