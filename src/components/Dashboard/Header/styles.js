import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  max-width: 1150px;
  margin-top: 20px;

  @media (max-width: 780px) {
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;
