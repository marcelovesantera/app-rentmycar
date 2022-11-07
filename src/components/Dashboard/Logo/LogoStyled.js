import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* margin-top: 20px; */

  /* margin: auto; */
  h1 {
    font-family: "Poppins";
    font-size: 24px;
    color: var(--color4);
    font-weight: bold;
  }
  span {
    color: var(--color1);
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 24px;
    }
    /* background-color: #ac5880;
      margin: auto;
      display: flex;
      flex-direction: row; */
  }
`;
