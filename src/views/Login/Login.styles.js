import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  background-color: #2196f3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  padding: 0 30px;
  flex-grow: 1;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  margin: 15px 0;
  color: #2196f3;
  font-family: Lato-Regular;
  font-size: 30px;
  letter-spacing: 1.8px;
`;

export const Buttons = styled.View`
  margin-top: 20px;
  align-self: stretch;
`;

export const InputWrapper = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ForgotPassword = styled.Text`
  text-align: center;
  color: #727272;
  font-family: Lato-Regular;
  font-size: 13px;
`;
