import styled from "styled-components";

export const Select = styled.div`
  .selectMain {
    @media screen and (max-width: 425px) {
      width: 103px;
      height: 48px;
      display: flex;
      border: none;
      background-color: #f4f4f4;
      border-radius: 20px;
      justify-content: center;
      color: #878787;
      option {
        color: red;
      }
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
      width: 103px;
      height: 48px;
      display: flex;
      border: none;
      background-color: #f4f4f4;
      border-radius: 20px;
      justify-content: center;
      color: #878787;
      option {
        color: red;
      }
    }
    @media screen and (min-width: 769px) {
      max-width: 110px;
      height: 48px;
      display: flex;
      margin-left: 10px;
      border: none;
      padding: 0 20px;
      background-color: #f4f4f4;
      border-radius: 20px;
      justify-content: center;
      color: #878787;
      option {
        color: red;
      }
    }
  }
`;
