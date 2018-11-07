import React from 'react';
import {
  Wrapper,
  ContentWrapper,
  LogoWrapper,
  Subtitle,
  Form,
  LoginButtonWrapper,
  BackgroundWrapper,
  RegisterButtonWrapper
} from './Splash.styles';
import Button from '../../components/Button';
import icons from '../../assets/images/icons.png';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ActivityIndicator } from 'react-native';
import { LOGIN } from '../../constants/routes';
import Logo from '../../components/Logo';
import BackgroundIcons from '../../components/BackgroundIcons';

const TIMEOUT_DELAY = 250;

@observer
class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  @observable
  isLoading = false;
  @observable
  isContentVisible = false;

  componentDidMount() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.isContentVisible = true;
    }, TIMEOUT_DELAY);
  }

  onLogin = () => {
    const { navigation } = this.props;

    navigation.navigate(LOGIN);
  };

  render() {
    return (
      <Wrapper>
        {this.isLoading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <ContentWrapper pose={this.isContentVisible ? 'visible' : 'hidden'}>
            <BackgroundIcons />
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <Subtitle>
              Explore the best places of the world`s most vibrant cities!
            </Subtitle>

            <Form>
              <LoginButtonWrapper>
                <Button
                  text={'Login'}
                  textColor={'#2196f3'}
                  onPress={this.onLogin}
                />
              </LoginButtonWrapper>
              <RegisterButtonWrapper>
                <Button text={'Register'} backgroundColor={'transparent'} />
              </RegisterButtonWrapper>
            </Form>
          </ContentWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Splash;
