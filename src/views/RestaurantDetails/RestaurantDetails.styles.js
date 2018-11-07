import styled from 'styled-components';

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 168px;
`;

const HeaderImageWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const BackgroundWrapper = styled(HeaderImageWrapper)``;
export const Background = styled(HeaderImage)``;
export const OverlayWrapper = styled(HeaderImageWrapper)``;
export const Overlay = styled(HeaderImage)``;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 50px;
  left: 30px;
  bottom: 21px;
`;

export const Title = styled.Text`
  margin-bottom: 13px;
  color: #ffffff;
  font-family: Lato-Regular;
  font-size: 30px;
  letter-spacing: 1.8px;
`;

const DetailsText = styled.Text`
  color: #ffffff;
  font-family: Lato-Regular;
  font-size: 13px;
`;

const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled(Container)``;

export const Location = styled(Container)`
  margin-right: 15px;
`;
export const LocationIconWrapper = styled.View`
  margin-right: 7px;
  width: 7px;
  height: 10px;
`;
export const LocationIcon = styled(Icon)``;
export const LocationText = styled(DetailsText)``;

export const Hours = styled(Container)`
  margin-right: 15px;
`;
export const HoursIconWrapper = styled.View`
  margin-right: 5px;
  width: 10px;
  height: 10px;
`;
export const HoursIcon = styled(Icon)``;
export const HoursText = styled(DetailsText)``;

export const Likes = styled(Container)``;
export const LikesIcon = styled(Icon)``;
export const LikesIconWrapper = styled.View`
  margin-right: 4px;
  width: 10px;
  height: 10px;
`;
export const LikesText = styled(DetailsText)``;

export const Body = styled.View`
  padding: 30px 50px 30px 30px;
  background-color: #fff;
`;
export const Description = styled.Text`
  color: #727272;
  font-family: Lato-Regular;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
`;

export const Contacts = styled(Container)`
  padding-left: 30px;
  height: 32px;
  background-color: #2196f3;
`;

export const Phone = styled(Container)`
  margin-right: 35px;
`;
export const PhoneIconWrapper = styled.View`
  margin-right: 6px;
  width: 7px;
  height: 11px;
`;
export const PhoneIcon = styled(Icon)``;
export const PhoneText = styled(DetailsText)``;

export const Email = styled(Container)``;
export const EmailIconWrapper = styled.View`
  margin-right: 7px;
  width: 10px;
  height: 8px;
`;
export const EmailIcon = styled(Icon)``;
export const EmailText = styled(DetailsText)``;
