import styled from 'styled-components';
import { theme } from '../../themes';

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

  .burger-menu {
    height: 30%;
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    display: none;

    @media screen and (max-width: ${theme.screens.mediumScreen}) {
      display: flex;
    }
  }

  .burger-bar {
    width: 2rem;
    height: 0.2rem;
    /* background-color: rgb(0, 183, 255); */
    background-color: ${theme.color.textXDarkGray};
    /* background-color: ${({ theme }) => theme.color.colorWhite}; */
    border-radius: 0.5rem;
    margin-bottom: 2px;
  }

  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(-0.4rem, 1.15rem);
    transition: ease-out 0.5s;
    background-color: ${theme.color.textXDarkGray};
  }
  .burger-bar.clicked:nth-child(2) {
    transform: scale(0);
    transition: ease-out 0.5s;
  }
  .burger-bar.clicked:nth-child(3) {
    transform: rotate(135deg) translate(0.7rem, 1rem);
    transition: ease-out 0.5s;
    background-color: ${theme.color.textXDarkGray};
  }
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 40px;
  }
  a {
  }
`;

export const HeaderBtn = styled.div`
  /* position: absolute;
  top: 50px;
  right: 200px;
  transform: translateY(-50%); */
  display: flex;
  align-items: center;
  gap: 10px;
`;
