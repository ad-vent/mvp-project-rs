import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../src/components/Welcome';
import Header from '../shared/header';

const screens = {
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  }
}

const WelcomeStack = createStackNavigator(screens);

export default WelcomeStack;