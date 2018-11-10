import styled, { css } from 'styled-components';

export const Wrapper = styled.View`
  position: absolute;
  left: 10px;
  right: 10px;
  top: 20px;
  bottom: 20px;

  ${props =>
    props.full &&
    css`
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    `};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
