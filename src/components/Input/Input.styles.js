import styled from 'styled-components';

export const Wrapper = styled.View`
  padding: 0 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${{ borderBottomWidth: 1 }};
  ${{ borderBottomColor: '#b6b6b6' }};
`;

export const IconWrapper = styled.View`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TextInput = styled.TextInput`
  flex-grow: 1;
  color: #b6b6b6;
  font-family: Lato-Regular;
  font-size: 15px;
  letter-spacing: 0.9px;
`;
