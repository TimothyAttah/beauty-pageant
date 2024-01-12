import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  padding: 10px 0;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    /* background-color: ${({ theme }) => theme.color.bgColor}; */
    background-color: var(--main-color);
    box-shadow: ${({ theme }) => theme.shadow.mainShadow};
    z-index: -99;
    transform: translateY(calc(-100% - 10px));
    transition: transform 0.5s ease;
    .bg-reveal {
      ::before {
        transform: translateY(0);
      }
    }
  }
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

export const HeaderLogo = styled.div`
  img {
    width: 40px;
  }
  a {
  }
`;
