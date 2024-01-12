import styled from 'styled-components';

export const NavMenuContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 70px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumScreen}) {
    display: none;
  }

  /* li .activeLink a {
    span:first-child {
      transform: translateY(-33px);
      color: red;
    }
  } */
  li {
    display: flex;
    align-items: center;
    position: relative;
    width: 100px;
    height: 70px;
    z-index: 1;
    /* border: 2px solid red; */

    a.active {
      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: 10%;
        width: 80%;
        height: 5px;
        background: white;
        transition: 0.5s;
        border-radius: 30px;
      }
    }

    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 500;
      padding: 0 10px;
      transition: 0.5s;
      gap: 5px;
      font-size: 1.1rem;
      font-weight: bold;

      svg {
        display: block;
      }

      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: -3%;
        width: 0%;
        height: 5px;
        background: white;
        transition: 0.5s;
        border-radius: 30px;
      }

      :hover {
        ::after {
          width: 110%;
        }
      }

      :hover {
        /* span:first-child {
          transform: translateY(-33px);
        } */
        /* span:last-child {
          opacity: 1;
        } */
      }
      span:first-child {
        /* position: relative;
        display: block;
        line-height: 70px;
        font-size: 1.5rem;
        transition: 0.5s; */
      }

      span:last-child {
        /* position: absolute;
        font-size: 0.75rem;
        letter-spacing: 0.05rem;
        font-weight: 400;
        transform: translateY(18px);
        opacity: 0;
        transition: 0.5s; */
      }
    }
  }

  /* a {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    transition: ${({ theme }) => theme.transitions.transitionPrimary};

    :hover {
      color: ${({ theme }) => theme.colors.colorBackground2};
    }

    svg {
      display: block;
    }


  }*/
`;

export const Indicator = styled.div`
  /* position: absolute;
  top: -50%;
  left: 2px;
  transform: rotate(45deg);
  width: 65px;
  height: 65px;
  background: linear-gradient(45deg, #2e3192, #1bffff);
  border: 5px solid #06021b; */
`;
