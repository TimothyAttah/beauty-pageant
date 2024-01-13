import styled from 'styled-components';

export const ButtonContainer = styled.div`
  a {
    display: inline-block;
    padding: 10px 28px;
    background-color: var(--main-color);
    color: ${({ theme }) => theme.color.textWhite};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.fsmd};
    text-transform: capitalize;
    line-height: 1.5;
    font-family: inherit;
    border: 2px solid transparent;
    border-radius: 30px;
    vertical-align: middle;
    user-select: none;
    transition: all 0.3s ease;

    :hover {
      background-color: transparent;
      color: var(--main-color);
      border-color: var(--main-color);
    }

    button {
      background-color: inherit;
      color: inherit;
    }
  }
`;
