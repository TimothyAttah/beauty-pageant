import React from 'react';
import Typewriter from 'typewriter-effect';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import { Container } from '../../styles/globalStyles';
import * as Styles from './HeroStyle';
import nica from '../../assets/nica1.png';
import heroVic from '../../assets/240_F_82356597_1SBQQ59qwNyJ7iNDgZJDeXuqZS26WljN_ST.mp4';
import heroPix1 from '../../assets/240_F_162502605_3FqWTe1ni1AF9ZSxSVeycBB7uUhYnDeg.jpg';
import heroPix2 from '../../assets/240_F_273114869_FCBLWQbVau5VHUxqb225AUzam527AQsG.jpg';
import heroPix3 from '../../assets/240_F_633826600_ubucjKx3obauppPMHwRdDR29oTYIPmwD.jpg';
import heroPix4 from '../../assets/beautiful-afro-american-woman_144627-13084.jpg';
import heroPix6 from '../../assets/crystal-crown-princess-isolated-white-background_379858-15455.jpg';
import heroPix7 from '../../assets/240_F_1223936_xzZScqMjGm9tGm9OtvIoBiaSTzNNPQ.jpg';

export const Hero = () => {
  return (
    <Styles.HeroContainer>
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
          <h2>...not just a beauty</h2>
          <Styles.HeroGalleryWrapper>
            <Styles.HeroGalleryPix>
              <img src={heroPix4} alt='' />
            </Styles.HeroGalleryPix>
            <Styles.HeroGalleryPixItems>
              <div>
                <img src={heroPix1} alt='' />
              </div>
              <div>
                <img src={heroPix2} alt='' />
              </div>
              <div>
                <img src={heroPix3} alt='' />
              </div>
              <div>
                <img src={heroPix7} alt='' />
              </div>
              {/* <div>
              <img src={heroPix1} alt='' />
            </div>
            <div>
              <img src={heroPix7} alt='' />
            </div> */}
            </Styles.HeroGalleryPixItems>
          </Styles.HeroGalleryWrapper>
        </Styles.HeroGallery>
      </Container>
    </Styles.HeroContainer>
  );
};
