import React from 'react';
import HeartIcon from '../../components/HeartIcon';
import {
  ScrollWrapper,
  Wrapper,
  Header,
  OverlayWrapper,
  Overlay,
  BackgroundWrapper,
  Background,
  Info,
  Title,
  Details,
  Location,
  LocationIconWrapper,
  LocationIcon,
  LocationText,
  Hours,
  HoursIconWrapper,
  HoursIcon,
  HoursText,
  Likes,
  LikesIconWrapper,
  LikesIcon,
  LikesText,
  Body,
  Description,
  Contacts,
  Phone,
  PhoneIconWrapper,
  PhoneIcon,
  PhoneText,
  Email,
  EmailIconWrapper,
  EmailIcon,
  EmailText
} from './RestaurantDetails.styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import background from '../../assets/images/background.png';
import overlay from '../../assets/images/overlay.png';
import locationIcon from '../../assets/icons/map-marker.png';
import hoursIcon from '../../assets/images/clock.png';
import likeIcon from '../../assets/icons/heart.png';
import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';

const marker = {
  latlng: {
    latitude: 37.78825,
    longitude: -122.4324
  }
};

class RestaurantDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const restaurant = navigation.getParam('restaurant');
    const { title } = restaurant;

    return {
      title,
      headerRight: <HeartIcon />
    };
  };

  getEmail(title) {
    return `contact@${title
      .toLowerCase()
      .split(' ')
      .join('_')}.com`;
  }

  render() {
    const { navigation } = this.props;
    const restaurant = navigation.getParam('restaurant');

    return (
      <ScrollWrapper>
        <Wrapper>
          <Header>
            <BackgroundWrapper>
              <Background source={background} />
            </BackgroundWrapper>
            <OverlayWrapper>
              <Overlay source={overlay} />
            </OverlayWrapper>
            <Info>
              <Title>{restaurant.title}</Title>
              <Details>
                <Location>
                  <LocationIconWrapper>
                    <LocationIcon source={locationIcon} />
                  </LocationIconWrapper>
                  <LocationText>{restaurant.location}</LocationText>
                </Location>
                <Hours>
                  <HoursIconWrapper>
                    <HoursIcon source={hoursIcon} />
                  </HoursIconWrapper>
                  <HoursText>{restaurant.hours}</HoursText>
                </Hours>
                <Likes>
                  <LikesIconWrapper>
                    <LikesIcon source={likeIcon} resizeMode={'contain'} />
                  </LikesIconWrapper>
                  <LikesText>{restaurant.likes}</LikesText>
                </Likes>
              </Details>
            </Info>
          </Header>
          <Body>
            <Description>{restaurant.description}</Description>
          </Body>
          <Contacts>
            <Phone>
              <PhoneIconWrapper>
                <PhoneIcon source={phoneIcon} />
              </PhoneIconWrapper>
              <PhoneText>{restaurant.phone}</PhoneText>
            </Phone>
            <Email>
              <EmailIconWrapper>
                <EmailIcon source={emailIcon} />
              </EmailIconWrapper>
              <EmailText>{this.getEmail(restaurant.title)}</EmailText>
            </Email>
          </Contacts>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: '100%', height: 150 }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker coordinate={marker.latlng} />
          </MapView>
        </Wrapper>
      </ScrollWrapper>
    );
  }
}

export default RestaurantDetails;
