import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  left: 0;
  right: 0;
  top: 0;
  /* background: transparent; */
  background-color: ${({ theme }) => theme.color.colorBackground};
  z-index: 99;
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  h1 {
    display: flex;
    align-items: center;

    svg {
      display: flex;
    }
  }

  button {
    display: none;
  }

  .burger-menu {
    height: 30%;
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    display: none;

    /* @media screen and (max-width: ${({ theme }) =>
      theme.screens.mediumScreen}) {
      display: flex;
    } */
  }

  .burger-bar {
    width: 2rem;
    height: 0.2rem;
    /* background-color: rgb(0, 183, 255); */
    background-color: ${({ theme }) => theme.color.colorWhite};
    border-radius: 0.5rem;
  }

  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(0rem, 1.15rem);
    transition: ease-out 0.5s;
    background-color: red;
  }
  .burger-bar.clicked:nth-child(2) {
    transform: scale(0);
    transition: ease-out 0.5s;
  }
  .burger-bar.clicked:nth-child(3) {
    transform: rotate(135deg) translate(0.2rem, 1rem);
    transition: ease-out 0.5s;
    background-color: red;
  }
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallScreen}) {
    padding: 0 10px;
  }
`;
