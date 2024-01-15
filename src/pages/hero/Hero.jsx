import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import logo from '../../assets/logo1.png';
import nicaPix from '../../assets/gallery6.png';
import * as Styles from './HeroStyle';
import { Button } from '../../components/button/HeaderButton';
import { FaStar } from 'react-icons/fa';

export const Hero = () => {
  return (
    <Container>
      <Styles.HeroContainer>
        <Styles.HeroWrapper>
          {/* <Styles.HeroLeftSide>
          <img src={logo} alt='logo' />
        </Styles.HeroLeftSide> */}
          {/* <Styles.HeroInfoFee>
            <div>Registration Fee</div>
            <div>N5,000</div>
          </Styles.HeroInfoFee> */}
          <Styles.HeroMiddleSide>
            <Styles.HeroHeader>
              <h1>nica official nigeria ltd </h1>
              <small>presents</small>
              <h2>nigeria icon culture award</h2>
              <p>the most prestigious culture award event in nigeria</p>
            </Styles.HeroHeader>
          </Styles.HeroMiddleSide>
          <Styles.HeroRightSide>
            <img src={nicaPix} alt='img' />
          </Styles.HeroRightSide>
        </Styles.HeroWrapper>
        <Styles.HeroInfo>
          <Styles.HeroInfoFee>
            <div>Registration Fee</div>
            <div>N5,000</div>
          </Styles.HeroInfoFee>
          <Styles.HeroInfoHeader>
            <h4>A non-bikini pageant</h4>
            <p>Celebrating the Unique Beauty of African Culture</p>
          </Styles.HeroInfoHeader>
          <Styles.HeroInfoPrizeBox>
            <Styles.HeroInfoPrize>
              <p>Winner</p>
              <h3> N5M</h3>
            </Styles.HeroInfoPrize>
            <Styles.HeroInfoPrize>
              <p>1st Runner up</p>
              <h3> N3M</h3>
            </Styles.HeroInfoPrize>
            <Styles.HeroInfoPrize>
              <p>2nd Runner up</p>
              <h3> N1M</h3>
            </Styles.HeroInfoPrize>
          </Styles.HeroInfoPrizeBox>
        </Styles.HeroInfo>
        <Styles.HeroStarPrizes>
          <h2>Star Prizes</h2>
          <Styles.HeroStarPrize>
            <li>
              <FaStar /> Official car
            </li>
            <li>
              <FaStar /> a trip to ghana
            </li>
            <li>
              <FaStar /> a cash price
            </li>
            <li>
              <FaStar /> one year movie endorsement
            </li>
            <li>
              <FaStar /> one year brand ambassador
            </li>
          </Styles.HeroStarPrize>
        </Styles.HeroStarPrizes>
        <Styles.HeroBtn>
          <Button to='/about' width='180px'>
            learn more
          </Button>
          <Button to='/register' width='280px'>
            register as a participate
          </Button>
        </Styles.HeroBtn>
      </Styles.HeroContainer>
    </Container>
  );
};
