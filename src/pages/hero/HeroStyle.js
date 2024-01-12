import styled from 'styled-components';
import { theme } from '../../themes';
import bg from '../../assets/blue-copy-space-digital-background_23-2148821698.jpg';

export const HeroContainer = styled.section`
  padding: 100px 0 50px 0;
`;

export const HeroWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600;
  text-align: center;
  width: 100%;

  h5 {
    color: ${theme.color.textXDarkGray};
    font-size: ${theme.fontSize.fsmd};
    font-weight: 500;
  }

  img {
    width: 300px;
    margin: auto;
  }

  p {
    color: ${theme.color.mainColor};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
  }

  h2 {
    margin: 20px 0;
    /* line-height: 60px; */
  }

  span {
    color: ${theme.color.colorBackground2};
    font-size: ${theme.fontSize.fs2xl};
    font-weight: bolder;
  }
`;

export const HeroDate = styled.div`
  margin-top: 30px;
  h3 {
    margin-bottom: 10px;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const HeroGallery = styled.div`
  padding: 30px 0;
  margin: auto;
`;

export const HeroGalleryWrapper = styled.div`
  display: flex;
  /* align-items: center; */

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const HeroGalleryPix = styled.div`
  max-width: 700px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    margin: auto;
    max-width: 400px;

    margin-bottom: 30px;
  }
`;
export const HeroGalleryPixItems = styled.div`
  max-width: 700px;
  width: 100%;
  max-height: 600px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: 2px solid red; */
  /* overflow: hidden; */

  div {
    max-width: 300px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  img {
    width: 100%;
    /* height: 100%; */
    /* vertical-align: middle; */
    object-fit: cover;
    border-radius: 10px;
  }

  @media screen and (max-width: ${theme.screens.largeScreen}) {
    div {
      max-width: 200px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }
`;
// export const HeroInfo = styled.div``;
// export const HeroInfo = styled.div``;
// export const HeroInfo = styled.div``;
