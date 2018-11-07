import React from 'react';
import { ScrollWrapper, Wrapper } from './Categories.styles';
import * as icons from '../../assets/icons';
import Category from './Category';
import { RESTAURANTS } from '../../constants/routes';
import SearchIcon from '../../components/SearchIcon';

const categories = [
  {
    title: 'Restaurants',
    image: icons.restaurants
  },
  {
    title: 'Hotels',
    image: icons.hotels
  },
  {
    title: 'Nightlife',
    image: icons.nightlife
  },
  {
    title: 'Shopping',
    image: icons.shopping
  },
  {
    title: 'Culture',
    image: icons.culture
  },
  {
    title: 'Popular',
    image: icons.popular
  }
];

class Categories extends React.Component {
  static navigationOptions = {
    title: 'Browse categories',
    headerRight: <SearchIcon />
  };

  onCategory = () => {
    const { navigation } = this.props;
    navigation.navigate(RESTAURANTS);
  };

  render() {
    return (
      <ScrollWrapper>
        <Wrapper>
          {categories.map(category => (
            <Category
              key={category.title}
              category={category}
              onPress={() => this.onCategory(category)}
            />
          ))}
        </Wrapper>
      </ScrollWrapper>
    );
  }
}

export default Categories;
