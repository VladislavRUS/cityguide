import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 48%;
  background-color: #fff;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
`;

export const ImageWrapper = styled.View`
  margin-bottom: 15px;
  width: 40px;
  height: 40px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #212121;
  font-family: Lato-Regular;
  font-size: 15px;
  letter-spacing: 0.9px;
`;
