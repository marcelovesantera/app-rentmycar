import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  gap: 9px;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    margin-top: 10px;
  }
  @media screen and (min-width: 426px) and( max-width: 768px) {
  }
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
  select {
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
        color: black;
        background-color: #f4f4f4;
      }
      option:hover {
        background-color: red;
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
        color: black;
        background-color: #f4f4f4;
      }
      option:hover {
        background-color: red;
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
        color: black;
        background-color: #f4f4f4;
      }
      option:hover {
        background-color: red;
      }
    }
  }
`;
