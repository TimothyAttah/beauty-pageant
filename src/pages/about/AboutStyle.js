import styled from 'styled-components';
import { theme } from '../../themes';

export const AboutContainer = styled.section`
  padding: 100px 0 50px 0;
  margin: auto;
  max-width: 80%;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    padding: 40px 0 50px 0;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 45px;

  /* text-align: left; */
  /* margin: 0 0 15px; */
`;

export const AboutTitle = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.fs3xl};
  font-weight: bold;
  text-transform: capitalize;
  color: var(--main-color);
  margin: 0 0 12px;
  padding: 0 40px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 34px;
    background-color: var(--main-color);
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fslg};
    font-weight: bold;
  }
`;

export const AboutText = styled.p`
  /* grid-column: span 6; */
  align-self: center;
  font-size: ${theme.fontSize.fslg};
  line-height: 35px;
`;

export const AboutCardBox = styled.div`
  text-align: center;
  margin-top: 80px;
  h1 {
    display: inline-block;
    font-size: ${theme.fontSize.fs3xl};
    text-transform: capitalize;
    color: var(--main-color);
    margin: 0 0 12px;
    padding: 0 40px;
    position: relative;
    text-align: center;
    font-weight: bold;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    h1 {
      font-size: ${theme.fontSize.fslg};
      font-weight: bold;
    }
  }
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  /* flex-wrap: wrap; */

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AboutCard = styled.div`
  width: 350px;
  height: 250px;
  /* background-color: var(--main-color); */
  /* background-color: ${theme.color.colorPrimary}; */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  box-shadow: ${theme.shadow.mainShadow};
  border-radius: 20px;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    width: 300px;
  }
`;
export const AboutPrizeTitle = styled.p`
  /* color: ${theme.color.textWhite}; */
  color: var(--main-color);
  font-size: ${theme.fontSize.fslg};
  line-height: 2;
`;
export const AboutPrizeMoney = styled.h3`
  color: ${theme.color.textXDarkGray};
  font-size: ${theme.fontSize.fslg};
  line-height: 1.5;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fsmd};
  }
`;
export const AboutPrizeSubtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* line-height: 3; */
  /* color: ${theme.color.textLight}; */
  color: ${theme.color.textDarkGray};
`;
