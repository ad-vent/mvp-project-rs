import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from '../src/components/Profile';
import Header from '../shared/header';

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  }
}

const ProfileStack = createStackNavigator(screens);

export default ProfileStack;