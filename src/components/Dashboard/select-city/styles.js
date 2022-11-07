import styled from "styled-components";

export const SearchCity = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: center;
  border: none;
  width: 320.6px;
  background-color: #f4f4f4;
  .icon {
    font-size: 20px;
    margin: 10px;
  }
  .select {
    width: 350px;
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #f4f4f4;
    .icon {
      font-size: 20px;
      margin: 10px;
    }
    .select {
      max-width: 300px;
      font-size: 14px;
    }
  }
  @media screen and (min-width: 426px) and( max-width: 768px) {
  }
  @media screen and (min-width: 769px) {
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #f4f4f4;
    .icon {
      font-size: 20px;
      margin: 10px;
    }
    .select {
      width: 350px;
      font-size: 14px;
    }
  }
`;
