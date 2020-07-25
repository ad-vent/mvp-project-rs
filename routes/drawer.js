import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import WelcomeStack from './welcomeStack';
import HomeStack from './homeStack';
import ProfileStack from './profileStack';

const RootDrawerNavigator = createDrawerNavigator({
  Welcome: {
    screen: WelcomeStack
  },
  Home: {
    screen: HomeStack
  },
  Profile: {
    screen: ProfileStack
  }
},
{
  drawerPosition: 'right',
  contentOptions: {
    activeTintColor: '#ED3466',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: '',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontFamily: 'Helvetica'
    }
  },
  style: {
    backgroundColor: '#FFF'
  }
});

export default createAppContainer(RootDrawerNavigator);