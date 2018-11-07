import styled from 'styled-components';
import posed from 'react-native-pose';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #2196f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PosedContentWrapper = posed.View({
  visible: {
    scale: 1,
    opacity: 1
  },
  hidden: {
    scale: 0,
    opacity: 0
  }
});

export const ContentWrapper = styled(PosedContentWrapper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Subtitle = styled.Text`
  padding: 0 60px;
  margin-bottom: 90px;
  color: #ffffff;
  font-family: Lato-Regular;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
`;

export const Form = styled.View`
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 40px;
`;

export const LoginButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

export const RegisterButtonWrapper = styled.View``;
