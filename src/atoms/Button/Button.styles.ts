import styled from 'styled-components';
import { IStyledButtonProps } from './Button.types';

const StyledButton = styled.button<IStyledButtonProps>`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 88px;
  background: linear-gradient(91.2deg, #ffffff 0%, #f2f2f2 100%);
  box-shadow: -2px -4px 12px #ffffff, 2px 4px 8px rgba(0, 0, 0, 0.2);
  will-change: transform;
  transition: transform 500ms ease;

  font: bold normal 18px/21px Roboto, sans-serif;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: linear-gradient(54deg, #f8f8f8 0%, #eae9e9 100%);
  }

  &:focus {
    outline: none;
    border: 1px solid #9e9e9e;
  }

  &:active {
    background: linear-gradient(91.2deg, #ffffff 0%, #f2f2f2 100%);
    box-shadow: inset -2px -4px 12px #ffffff, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
  }

  transform: ${props => props.isMove && 'translateY(60px)'};
`;

export default StyledButton;
