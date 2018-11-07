import React from 'react';
import {
  Buttons,
  ButtonWrapper,
  ForgotPassword,
  Form,
  InputWrapper,
  LogoWrapper,
  Title,
  Wrapper
} from './Login.styles';
import Logo from '../../components/Logo';
import BackgroundIcons from '../../components/BackgroundIcons';
import Input from '../../components/Input';
import lock from '../../assets/images/lock.png';
import email from '../../assets/images/email.png';
import Button from '../../components/Button';
import { MAIN_STACK } from '../../constants/routes';

class Login extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: 'white'
  };

  onLogin = () => {
    const { navigation } = this.props;

    navigation.navigate(MAIN_STACK);
  };

  render() {
    return (
      <Wrapper behavior="padding" enabled>
        <BackgroundIcons />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Form>
          <Title>Welcome back!</Title>

          <InputWrapper>
            <Input icon={email} placeholder={'Your email address'} />
          </InputWrapper>
          <InputWrapper>
            <Input icon={lock} placeholder={'Your password'} />
          </InputWrapper>
          <Buttons>
            <ButtonWrapper>
              <Button
                onPress={this.onLogin}
                text={'Login'}
                borderColor={'#2196f3'}
                textColor={'#2196f3'}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                text={'Facebook'}
                textColor={'#fff'}
                backgroundColor={'#2196f3'}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <ForgotPassword>Forgot password?</ForgotPassword>
            </ButtonWrapper>
          </Buttons>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
