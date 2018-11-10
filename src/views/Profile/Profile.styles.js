import styled from 'styled-components';

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2196f3;
`;

export const BackgroundWrapper = styled.View`
  position: absolute;
  top: -60px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  position: relative;
  height: 90px;
  z-index: 1;
`;

export const AvatarWrapper = styled.View`
  position: relative;
  top: 20px;
  margin: 0 auto;
  width: 130px;
  height: 130px;
  padding: 7px;
  border-radius: 75px;
  overflow: hidden;
  background-color: #fff;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ChangeAvatar = styled.Text`
  position: relative;
  top: 27px;
  margin: 0 auto;
  color: #2196f3;
  font-family: Lato-Bold;
  font-size: 13px;
`;

export const From = styled.View`
  padding: 90px 30px 30px 30px;
  background-color: #fff;
`;

export const InputWrapper = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${{ borderBottomWidth: 1 }};
  ${{ borderBottomColor: '#b6b6b6' }};

  margin-bottom: 30px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;
  width: 15px;
  height: 15px;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 40px;
  color: #212121;
  font-family: Lato-Regular;
  font-size: 15px;
`;
