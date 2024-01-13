import React from 'react';
import Typewriter from 'typewriter-effect';
// import { FadeIn } from '../../components/fadeIn/FadeIn';
import { Container } from '../../styles/globalStyles';
import * as Styles from './HeroStyle';
// import nica from '../../assets/nica1.png';
import heroVic from '../../assets/240_F_82356597_1SBQQ59qwNyJ7iNDgZJDeXuqZS26WljN_ST.mp4';
import heroPix1 from '../../assets/golden.png';
import heroPix2 from '../../assets/red-carpet-background-realistic-style_23-2147774601.jpg';
import heroPix3 from '../../assets/20231016MRK09465.jpg';
import heroPix4 from '../../assets/beautiful-afro-american-woman_144627-13084.jpg';
// import heroPix6 from '../../assets/crystal-crown-princess-isolated-white-background_379858-15455.jpg';
import heroPix7 from '../../assets/still-life-ruler-crown_23-2150248876.jpg';

export const Hero = () => {
  return (
    <Styles.HeroContainer id='home'>
      <Container>
        <Styles.HeroWrapper>
          <Styles.HeroInfo>
            <h5>Nigeria Icon Culture Awards</h5>
            {/* <img src={nica} alt='logo' />*/}
            <h2>The 1st Edition Face of NICA</h2>
            <p>Presents</p>

            <div>
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ['Pageantry', 'Competition', '2024'],
                  }}
                />
              </span>
            </div>
            <Styles.HeroDate>
              <h3>Date: 20th October 2024</h3>
              <h3>Participation Fee: N5000.00</h3>
            </Styles.HeroDate>
            {/* <h3> Pageantry Competition 2024</h3> */}
          </Styles.HeroInfo>
          <Styles.VideoWrapper>
            <video src={heroVic} autoPlay muted loop></video>
          </Styles.VideoWrapper>
        </Styles.HeroWrapper>
        <Styles.HeroGallery>
          <h2>...not just beauty</h2>
          <Styles.HeroGalleryWrapper>
            <Styles.HeroGalleryPix>
              <img src={heroPix4} alt='' />
            </Styles.HeroGalleryPix>

            <Styles.HeroGalleryPixItems>
              <img src={heroPix1} alt='' />
            </Styles.HeroGalleryPixItems>
            <Styles.HeroGalleryPixItems>
              <img src={heroPix2} alt='' />
            </Styles.HeroGalleryPixItems>
            <Styles.HeroGalleryPixItems>
              <img src={heroPix3} alt='' />
            </Styles.HeroGalleryPixItems>
            <Styles.HeroGalleryPixItems>
              <img src={heroPix7} alt='' />
            </Styles.HeroGalleryPixItems>
          </Styles.HeroGalleryWrapper>
        </Styles.HeroGallery>
      </Container>
    </Styles.HeroContainer>
  );
};
