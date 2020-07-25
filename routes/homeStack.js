import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../src/components/Home';
import Header from '../shared/header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;