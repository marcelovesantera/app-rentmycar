import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1.4rem;

  input {
    width: 20.25rem;
    height: 3rem;
    border-radius: 18px;
    padding-left: 40px;
    margin-bottom: 12px;
    background-color: rgba(244, 244, 244, 1);
    border: none;
  }

  input::placeholder {
    font-family: "Poppins", sans-serif;
    color: rgba(135, 135, 135, 1);
    font-size: 0.875rem;
  }

  .email {
    position: relative;
    top: 48px;
    left: -140px;
  }

  .password {
    position: relative;
    top: 90px;
    left: -140px;
  }

  .btn-form {
    width: 20.25rem;
    height: 3rem;
    border-radius: 18px;
    background-color: rgba(26, 153, 136, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    line-height: 18px;
    border: none;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.875rem;
  }

  .btn-form:hover {
    background-color: rgba(31, 125, 113, 1);
  }

  .span-error {
    color: rgba(235, 86, 0, 1);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 12px;
    position: relative;
    margin: 0;
    top: -12px;
    align-self: end;
  }

  ${({ errorEmail }) =>
    errorEmail
      ? css`
          .password {
            top: 109px;
          }

          .btn-form {
            margin-bottom: 0.875rem;
          }
        `
      : css``}

  @media (max-width: 371px) {
    input {
      width: 16.25rem;
    }
    .btn-form {
      width: 16.25rem;
    }

    .email {
      left: -107px;
    }

    .password {
      left: -107px;
    }
  }
`;
