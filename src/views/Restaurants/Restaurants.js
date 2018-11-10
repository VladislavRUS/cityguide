import React from 'react';
import { Wrapper, List } from './Restaurants.styles';
import Restaurant from './Restaurant';
import restaurants from './mock';
import SearchIcon from '../../components/SearchIcon';
import { RESTAURANT_DETAILS } from '../../constants/routes';

class Restaurants extends React.Component {
  static navigationOptions = {
    title: 'Browse restaurants',
    headerRight: <SearchIcon />,
    headerStyle: {
      elevation: 0,
      backgroundColor: '#2196f3'
    }
  };

  onRestaurant = restaurant => {
    const { navigation } = this.props;

    navigation.navigate(RESTAURANT_DETAILS, {
      restaurant
    });
  };

  render() {
    return (
      <Wrapper>
        <List
          keyExtractor={(item, index) => index.toString()}
          data={restaurants}
          renderItem={({ item, index }) => (
            <Restaurant
              onPress={() => this.onRestaurant(item)}
              restaurant={item}
              showBorder={index !== restaurants.length - 1}
            />
          )}
        />
      </Wrapper>
    );
  }
}

export default Restaurants;
