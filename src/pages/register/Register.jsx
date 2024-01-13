import React, { useEffect } from 'react';
import RegisterForm from '../../components/forms/RegisterForm';

const Register = () => {
  // const form = document.querySelector('form');
  // const nextBtn = form.querySelector('.nextBtn');
  // const backBtn = form.querySelector('.nextBtn');

  useEffect(() => {
    // nextBtn.addEventListener('click', () => {
    //   form.classList.add('setActive');
    // });
  }, []);

  // console.log(nextBtn);
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
