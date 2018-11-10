import React, { Component } from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import * as Routes from '../../constants/routes';
import Splash from '../../views/Splash';
import Login from '../../views/Login';
import Location from '../../views/Location';
import Categories from '../../views/Categories';
import Profile from '../../views/Profile';
import TabIcon from '../../components/TabIcon/TabIcon';
import * as icons from '../../assets/icons';
import Restaurants from '../../views/Restaurants';
import RestaurantDetails from '../../views/RestaurantDetails';

const headerStyles = {
  headerStyle: {
    backgroundColor: '#2196f3'
  },
  headerTitleStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16
  },
  headerTintColor: 'white'
};

const AuthStack = createStackNavigator(
  {
    Splash,
    Login
  },
  {
    initialRouteName: Routes.SPLASH
  }
);

const LocationStack = createStackNavigator(
  {
    Location
  },
  {
    navigationOptions: {
      ...headerStyles
    }
  }
);

LocationStack.navigationOptions = ({ navigation }) => ({
  title: 'Location',
  tabBarVisible: false,
  tabBarIcon: () => (
    <TabIcon
      focused={navigation.isFocused()}
      activeIcon={icons.locationInactive}
      inactiveIcon={icons.locationInactive}
    />
  )
});

const BrowseStack = createStackNavigator(
  {
    Categories,
    Restaurants,
    RestaurantDetails
  },
  {
    initialRouteName: Routes.CATEGORIES,
    navigationOptions: {
      ...headerStyles
    }
  }
);

BrowseStack.navigationOptions = ({ navigation }) => ({
  title: 'Browse',
  tabBarIcon: () => (
    <TabIcon
      focused={navigation.isFocused()}
      activeIcon={icons.browseActive}
      inactiveIcon={icons.browseInactive}
    />
  )
});

const ProfileStack = createStackNavigator(
  {
    Profile
  },
  {
    navigationOptions: {
      ...headerStyles
    }
  }
);

ProfileStack.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  tabBarIcon: () => (
    <TabIcon
      focused={navigation.isFocused()}
      activeIcon={icons.profileActive}
      inactiveIcon={icons.profileInactive}
    />
  )
});

const MainStack = createBottomTabNavigator(
  {
    LocationStack,
    BrowseStack,
    ProfileStack
  },
  {
    initialRouteName: Routes.BROWSE_STACK,
    tabBarOptions: {
      style: {
        height: 72,
        backgroundColor: '#fff',
        paddingBottom: 5
      },
      labelStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 12
      },
      activeTintColor: '#2196f3',
      inactiveTintColor: '#b6b6b6'
    }
  }
);

const createNavigator = () =>
  createSwitchNavigator(
    {
      AuthStack,
      MainStack
    },
    {
      initialRouteName: Routes.MAIN_STACK
    }
  );

export default class App extends Component {
  constructor(props) {
    super(props);

    this.Navigator = createNavigator();
  }

  render() {
    const { Navigator } = this;

    return <Navigator />;
  }
}
