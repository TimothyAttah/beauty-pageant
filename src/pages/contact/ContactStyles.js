import styled from 'styled-components';
import { theme } from '../../themes';

export const ContactSection = styled.section`
  padding: 60px 0;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 45px;
  font-size: ${theme.fontSize.fs3xl};
  text-transform: capitalize;
  margin: 0 0 15px;
`;
export const Title = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.fs2xl};
  font-weight: 400;
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
`;
export const SubTitle = styled.h2`
  font-size: ${theme.fontSize.fs3xl};
  text-transform: capitalize;
  margin-bottom: 80px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fslg};
  }
`;

export const ContactInfo = styled.div`
  grid-column: span 5;

  div + div {
    margin-top: 20px;
    border-top: 1px solid ${theme.color.borderColor};
  }
`;
export const ContactInfoItem = styled.div`
  position: relative;
  padding: 20px 0 20px 70px;

  h3 {
    margin: 0 0 10px;
    font-size: ${theme.fontSize.fsxl};
    font-weight: 500;
    text-transform: capitalize;
  }

  p:last-child {
    margin: 0;
  }
`;

export const SvgBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${theme.color.bgColor};
  box-shadow: ${theme.shadow.mainShadow};
  color: var(--main-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 20px;
`;
export const ContactForm = styled.div`
  grid-column: span 7;
`;

export const InputBox = styled.div`
  margin-bottom: 20px;

  input,
  textarea {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid ${theme.color.borderColor};
    background-color: transparent;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: ${theme.color.textXDarkGray};
    padding: 0 20px;

    :focus {
      outline: 1px solid ${theme.color.borderColor};
    }

    ::placeholder {
      color: ${theme.color.textDarkGray};
      opacity: 1; /* overide firefox default opacity */
    }
  }
  textarea {
    display: block;
    height: 150px;
    padding-top: 15px;
    resize: none;
  }
`;

export const BtnWrap = styled.div``;
