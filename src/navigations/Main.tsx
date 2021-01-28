import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {UserDetail, UsersList} from '@modules';

const navigations = [
  {
    name: Navigations.UsersList,
    component: UsersList
  },
  {
    name: Navigations.UsersDetail,
    component: UserDetail
  },
];

const Stack = createStackNavigator();

const MainNavigaiton = (): ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>
      {
        navigations.map(route => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))
      }
    </Stack.Navigator>
  )
};

export default MainNavigaiton

