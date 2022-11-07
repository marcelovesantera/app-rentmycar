import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins";
  max-width: 1150px;
  width: 90%;

  main {
    width: 100%;

    ul {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    margin-top: 14px;
    max-width: 360px;
    max-height: 640px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 20px;
  }
  @media screen and (min-width: 426px) and( max-width: 768px) {
    display: flex;
    flex-direction: column;

    main {
      width: 100%;

      ul {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    main {
      width: 100%;

      ul {
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
    }
  }

  .mainHeader {
    margin-top: 16px;
    min-height: 66px;
    width: 100%;
    padding: 0px 10px;

    @media screen and (max-width: 425px) {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
      width: 337px;
      height: 190px;
      margin: 10 auto;
      border-radius: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
      height: 100%;
      max-height: 300px;
      align-items: center;
      justify-items: center;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin: 10px auto;
      border-radius: 20px;
      flex-wrap: nowrap;
      gap: 10px;
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      max-width: 1400px;
      max-height: 300px;
      padding: 10px;
      align-items: center;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 20px;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
  .mainHeaderLocation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 60%; */
    height: 50px;
    margin: 0;

    @media screen and (max-width: 425px) {
      width: 100%;
      height: 50px;
    }

    @media screen and (min-width: 426px) and( max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 769px) {
      width: 30%;
      height: 50px;
      margin: 0;
    }
  }

  .mainHeaderFilters {
    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
      width: 100%;
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-direction: row;
    }
  }
  .mainHeaderDateSearch {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    max-width: 300px;
    gap: 5px;
  }
  .mainHeaderDates {
    margin-left: 10px;
    display: flex;
    width: 290px;
    height: 48px;
    align-items: center;
    justify-content: flex-start;
    background-color: #f4f4f4;
    border-radius: 20px;
    max-width: 90%;
    @media screen and (max-width: 425px) {
      display: flex;
      align-items: center;
      width: 265px;
      height: 48px;
      background-color: #f4f4f4;
      border-radius: 20px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 16px;
      color: #292929;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      margin-left: 10px;
      display: flex;
      width: 90%;
      height: 48px;
      align-items: center;
      background-color: #f4f4f4;
      border-radius: 20px;
      max-width: 400px;
    }
  }
  .mainHeaderDatesIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    font-size: 20px;
  }
  .mainHeaderSearch {
    display: flex;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 40px;
    height: 40px;
    background-color: #eb5600;
    @media screen and (max-width: 425px) {
      display: flex;
      font-size: 20px;
      color: white;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      width: 40px;
      height: 40px;
      background-color: #eb5600;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      display: flex;
      font-size: 20px;
      color: white;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      width: 40px;
      height: 40px;
      background-color: #eb5600;
      cursor: pointer;
    }
  }
  ul {
    @media screen and (max-width: 425px) {
      display: flex;
      overflow-x: auto;
      width: inherit;
      height: max-content;
      align-items: center;
      padding: 32px;
      list-style: none;
    }
    @media screen and (min-width: 426px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-wrap: wrap;
      max-height: 1400px;
      width: 94%;
      justify-content: flex-start;
      // background-color: red;
      overflow: unset;
      list-style: none;
      gap: 5px;
      margin: 10px auto;
    }
  }
  .loadMore {
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #1a9988;
    color: white;
    border-radius: 20px;

    margin: 0 auto;
    width: 196px;
    height: 48px;
    @media screen and (min-width: 426px) {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      background-color: #1a9988;
      color: white;
      border-radius: 20px;

      width: 196px;
      height: 48px;
      left: auto;
      top: 90%;
    }
    @media screen and (min-width: 769px) {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      background-color: #1a9988;
      color: white;
      border-radius: 20px;

      width: 196px;
      height: 48px;
      left: auto;
      top: 90%;
    }
  }

  .loadMoreMobile {
    display: none;
    @media screen and (max-width: 425px) {
      width: 70px;
      height: 30px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      border-radius: 20px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: #1a9988;
      color: white;
    }
  }
`;
