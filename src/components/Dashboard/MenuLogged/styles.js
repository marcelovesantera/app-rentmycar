import styled from "styled-components";
export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 314px;
  height: 40px;
  /* position:fixed;
  bottom:10px ; */
  .divContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 40px;
  }
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: var(--color0);
    justify-content: center;
    /* :hover{
        background-color: var(--color4);
        border-radius:6px
      } */
  }
  .btnProfile {
    height: 28px;
    border: solid 2px var(--color0);
    border-radius: 6px;
    margin-left: 5px;
    width: 28px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    height: 28px;
    border: solid 2px var(--color0);
    border-radius: 6px;
    margin-left: 5px;
    width: 28px;
    background-color: lightgray;
  }
  img {
    height: 100%;
  }

  .img-no-img {
    width: 22px;
    border-radius: 4px;
    border: 1px solid white;
  }
  p {
    font-size: 16px;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
  }
  /* midia query mobile */
  @media (max-width: 425px) {
    position: fixed;
    bottom: 10px;
    left: 0;
    width: 100vw;
    .divContainer {
      border-radius: 18px;
      height: 48px;
      background-color: var(--color5);
      display: flex;
      width: 90%;
      justify-content: space-around;
      /* :hover{
          background-color:var(--color1);
        } */
    }
    p {
      display: none;
    }
    .divContainer_unloged {
      border-radius: 18px;
      height: 48px;
      background-color: var(--color5);
      display: flex;
      width: 90%;
      justify-content: space-around;
      p {
        display: inline;
      }
    }
  }
  /* media query desktop */
  @media (min-width: 426px) {
    width: max-content;
    text-align: right;
    p,
    button {
      color: var(--color1);
      display: flex;
      align-items: center;
    }
    img,
    .btnProfile {
      border: solid 2px var(--color0);
    }
    .divContainer_unloged {
      p {
        display: inline;
      }
    }
  }
  @media (min-width: 426px) and (max-width: 769px) {
    .divContainer_unloged {
      p {
        display: inline;
      }
    }
    p {
      display: none;
    }
    button {
      padding: 0px 5px;
    }
  }
`;
