import React from 'react';
import BackgroundIcons from '../../components/BackgroundIcons';
import {
  ScrollWrapper,
  Wrapper,
  BackgroundWrapper,
  Header,
  AvatarWrapper,
  Avatar,
  ChangeAvatar,
  From,
  InputWrapper,
  IconWrapper,
  Icon,
  Input
} from './Profile.styles';
import avatar from '../../assets/images/avatar.png';
import user from '../../assets/icons/user.png';
import emailDark from '../../assets/icons/email_dark.png';
import lock from '../../assets/icons/lock.png';
import Button from '../../components/Button';
import { SPLASH } from '../../constants/routes';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      elevation: 0,
      backgroundColor: '#2196f3'
    }
  };

  toSplash = () => {
    const { navigation } = this.props;

    navigation.navigate(SPLASH);
  };

  render() {
    return (
      <ScrollWrapper>
        <Wrapper>
          <BackgroundWrapper>
            <BackgroundIcons full={true} />
          </BackgroundWrapper>
          <Header>
            <AvatarWrapper>
              <Avatar source={avatar} />
            </AvatarWrapper>
            <ChangeAvatar>Change photo</ChangeAvatar>
          </Header>
          <From>
            <InputWrapper>
              <IconWrapper>
                <Icon source={user} resizeMode={'contain'} />
              </IconWrapper>
              <Input value={'Jakub Kowalczyk'} />
            </InputWrapper>
            <InputWrapper>
              <IconWrapper>
                <Icon source={emailDark} resizeMode={'contain'} />
              </IconWrapper>
              <Input value={'jakubkowalczyk@mail.com'} />
            </InputWrapper>
            <InputWrapper>
              <IconWrapper>
                <Icon source={lock} resizeMode={'contain'} />
              </IconWrapper>
              <Input value={'qwerty'} secureTextEntry={true} />
            </InputWrapper>
            <Button
              onPress={this.toSplash}
              text={'Log out'}
              backgroundColor={'#f44336'}
              color={'#fff'}
            />
          </From>
        </Wrapper>
      </ScrollWrapper>
    );
  }
}

export default Profile;
