import React, { useState } from 'react';
// import { FadeIn } from '../fadeIn/FadeIn';
import { RiSendPlane2Fill } from 'react-icons/ri';
import * as Styles from './RegisterFormStyles';
import { Container } from '../../styles/globalStyles';

const RegisterForm = () => {
  const [nextForm, setNextForm] = useState(false);
  // const form = document.querySelector('form');

  const nextBtn = (e) => {
    setNextForm(true);
  };

  const prevBtn = (e) => {
    setNextForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container form='true'>
        <Styles.FormContainer>
          <Styles.FormHeader>Registration</Styles.FormHeader>
          <Styles.Form onSubmit={handleSubmit}>
            {!nextForm ? (
              <Styles.FormFirst className='form first'>
                <Styles.FormDetails personal='true'>
                  <Styles.FormTitle>Personal Details</Styles.FormTitle>
                  <Styles.FormFields>
                    <Styles.FormInputField>
                      <label>Full Name</label>
                      <input type='text' placeholder='Enter your name' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Date of Birth</label>
                      <input type='date' placeholder='Enter birth date' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Email</label>
                      <input type='email' placeholder='Enter your email' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Mobile Number</label>
                      <input type='text' placeholder='Enter mobile number' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Gender</label>
                      <input type='text' placeholder='Enter your gender' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Occupation</label>
                      <input type='email' placeholder='Enter your occupation' />
                    </Styles.FormInputField>
                  </Styles.FormFields>
                </Styles.FormDetails>

                <Styles.FormDetails iddetails='true'>
                  <Styles.FormTitle>Identity Details</Styles.FormTitle>
                  <Styles.FormFields>
                    <Styles.FormInputField>
                      <label>ID Type</label>
                      <input type='text' placeholder='Enter ID type' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>ID Number</label>
                      <input type='number' placeholder='Enter ID number' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Issued Authority</label>
                      <input type='text' placeholder='Enter issued authority' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Issued State</label>
                      <input type='text' placeholder='Enter issued state' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Issued Date</label>
                      <input type='date' placeholder='Enter issued date' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Expiry Date</label>
                      <input
                        type='date'
                        placeholder='Enter issued expiry date'
                      />
                    </Styles.FormInputField>
                  </Styles.FormFields>
                </Styles.FormDetails>

                <Styles.NextBtn onClick={() => nextBtn()}>
                  <span>Next</span>
                  <RiSendPlane2Fill />
                </Styles.NextBtn>
              </Styles.FormFirst>
            ) : (
              <Styles.FormFirst className='form second' second='true'>
                <Styles.FormDetails address='true'>
                  <Styles.FormTitle>Address Details</Styles.FormTitle>
                  <Styles.FormFields>
                    <Styles.FormInputField>
                      <label>Address Type</label>
                      <input type='text' placeholder='Enter address type' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Nationality</label>
                      <input type='text' placeholder='Enter nationality' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>State</label>
                      <input type='text' placeholder='Enter your state' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>District</label>
                      <input type='text' placeholder='Enter your district' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Block Number</label>
                      <input type='number' placeholder='Enter block number' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Ward Number</label>
                      <input type='number' placeholder='Enter ward number' />
                    </Styles.FormInputField>
                  </Styles.FormFields>
                </Styles.FormDetails>

                <Styles.FormDetails family='true'>
                  <Styles.FormTitle>Family Details</Styles.FormTitle>
                  <Styles.FormFields>
                    <Styles.FormInputField>
                      <label>Father Name</label>
                      <input type='text' placeholder='Enter father name' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Mother Name</label>
                      <input type='text' placeholder='Enter mother name' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Grandfather</label>
                      <input type='text' placeholder='Enter grandfather name' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Spouse Name</label>
                      <input type='text' placeholder='Enter spouse name' />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Father in Law</label>
                      <input
                        type='text'
                        placeholder='Enter father in law name'
                      />
                    </Styles.FormInputField>

                    <Styles.FormInputField>
                      <label>Mother in Law</label>
                      <input
                        type='text'
                        placeholder='Enter mother in law name'
                      />
                    </Styles.FormInputField>
                  </Styles.FormFields>
                </Styles.FormDetails>

                <Styles.ButtonsWrapper>
                  <Styles.NextBtn prevbtn='true' onClick={prevBtn}>
                    <RiSendPlane2Fill />
                    <span>Back</span>
                  </Styles.NextBtn>

                  <Styles.NextBtn>
                    <span>Register</span>
                    {/* <RiSendPlane2Fill /> */}
                  </Styles.NextBtn>
                </Styles.ButtonsWrapper>
              </Styles.FormFirst>
            )}
          </Styles.Form>
        </Styles.FormContainer>
      </Container>
    </>
  );
};

export default RegisterForm;
