import styled from 'styled-components';

const StyledAvatar = styled.div`
  padding: 0px 40px;
  padding-bottom: 79px;
`;

const DefaultAvatar = styled.div`
  position: relative;
  width: 114px;
  height: 114px;
  border-radius: 10em;
  background: #6c6c6c;
  &::after {
    content: '';
    position: absolute;
    width: 185.65px;
    height: 93.5px;
    top: 100px;
    left: -35px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
    background: #6c6c6c;
  }
`;

export { StyledAvatar, DefaultAvatar };
