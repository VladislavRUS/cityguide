import React from 'react';
import { Wrapper } from './Location.styles';
import City from './City';
import Swiper from 'react-native-swiper';
import newYork from '../../assets/images/newYork.png';
import london from '../../assets/images/london.png';
import paris from '../../assets/images/paris.png';
import { BROWSE_STACK } from '../../constants/routes';
import TabIcon from '../../components/TabIcon/TabIcon';
import * as icons from '../../assets/icons';

const cities = [
  {
    name: 'New York',
    info:
      'Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world.',
    image: newYork
  },
  {
    name: 'London',
    info:
      'London is the capital and most populous city of England and the United Kingdom.',
    image: london
  },
  {
    name: 'Paris',
    info:
      'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. The area is 105 km2, and around 2.15 million people live there.',
    image: paris
  }
];

class Location extends React.Component {
  static navigationOptions = {
    title: 'Location',
    tabBarVisible: false,
    tabBarIcon: focused => (
      <TabIcon
        focused={focused}
        activeIcon={icons.browseActive}
        inactiveIcon={icons.browseInactive}
      />
    )
  };

  onChoose = city => {
    const { navigation } = this.props;

    navigation.navigate(BROWSE_STACK, {
      city
    });
  };

  render() {
    return (
      <Wrapper>
        <Swiper style={{ flex: 1 }} activeDotColor={'#2196f3'}>
          {cities.map(city => (
            <City city={city} key={city.name} onChoose={this.onChoose} />
          ))}
        </Swiper>
      </Wrapper>
    );
  }
}

export default Location;
