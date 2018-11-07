import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor || '#fff'};
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${props => props.borderColor || '#fff'};
`;

export const Text = styled.Text`
  color: ${props => props.textColor || '#fff'};
  font-family: Lato-Bold;
  font-size: 15px;
  letter-spacing: 0.9px;
`;
