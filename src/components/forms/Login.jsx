import React from 'react';
// import { FadeIn } from '../fadeIn/FadeIn';
import { RiSendPlane2Fill } from 'react-icons/ri';
import * as Styles from './RegisterFormStyles';
import nicaLogo from '../../assets/nica2.png';
import { Container } from '../../styles/globalStyles';

const LoginForm = () => {
  // const [nextForm, setNextForm] = useState(false);
  // const form = document.querySelector('form');

  // const nextBtn = (e) => {
  //   setNextForm(true);
  // };

  // const prevBtn = (e) => {
  //   setNextForm(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container form='true'>
        <Styles.FormContainer>
          <img src={nicaLogo} alt='' />
          <Styles.Form onSubmit={handleSubmit}>
            <Styles.FormFirst className='form first'>
              <Styles.FormDetails personal='true'>
                <Styles.FormTitle>Login Details</Styles.FormTitle>
                <Styles.FormFields login>
                  <Styles.FormInputField login>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your email' />
                  </Styles.FormInputField>

                  <Styles.FormInputField login>
                    <label>Password</label>
                    <input type='password' placeholder='Enter your password' />
                  </Styles.FormInputField>
                </Styles.FormFields>
              </Styles.FormDetails>

              <Styles.NextBtn>
                <span>Login</span>
                <RiSendPlane2Fill />
              </Styles.NextBtn>
            </Styles.FormFirst>
          </Styles.Form>
        </Styles.FormContainer>
      </Container>
    </>
  );
};

export default LoginForm;
