import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {Onboarding} from '@modules';
import MainNavigaiton from '@navigations/Main';
import {OnboardingContext} from '@context';
import {Animated} from 'react-native';
import {observer} from 'mobx-react';
import {LoadingBig, Message, Text} from '@components';
import {loadingStore, noticeMessageStore} from '@stores';
import {navigationRef} from '@navigations/RootNavigation';
import {COLORS} from '@styles/base';

const navigations = [
  {
    name: Navigations.Onboarding,
    component: Onboarding
  },
  {
    name: Navigations.Main,
    component: MainNavigaiton
  },
];

const Stack = createStackNavigator();

@observer
class Container extends Component {
  static contextType = OnboardingContext;
  
  render(): ReactElement {
    const {showOnboarding} = this.context;
  
    const firstScreen = showOnboarding
      ? Navigations.Onboarding
      : Navigations.Main;
    
    return (
      <>
        <NavigationContainer ref={navigationRef} theme={{
          dark: false,
          colors: {
            primary: COLORS.PRIMARY,
            background: COLORS.MAIN_BG,
            card: COLORS.MAIN_BG,
            text: COLORS.FONT,
            border: COLORS.BORDER,
            notification: COLORS.PRIMARY,
          }
        }}>
          <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
          }} headerMode={'none'} initialRouteName={showOnboarding ? Navigations.Onboarding : firstScreen}>
             {
              navigations.map(route => (
                <Stack.Screen key={route.name} name={route.name} component={route.component}/>
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
        
        <LoadingBig loading={loadingStore.loading}/>
        <Message show={noticeMessageStore.show} text={noticeMessageStore.text} type={noticeMessageStore.type} />
      </>
    );
  }
}

export default Container;
