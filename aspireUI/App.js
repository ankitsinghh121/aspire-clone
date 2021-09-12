import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Icons} from './src/constants';
import {
  DebitCard,
  SetLimit,
  CreditScreen,
  ProfileScreen,
  PaymentsScreen,
  HomeScreen,
} from './src/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: props => {
          const {color} = props;
          let icon;
          switch (route.name) {
            case 'Home':
              icon = <Icons.Home fill={color} />;
              break;
            case 'Debit Card':
              icon = <Icons.DebitCard fill={color} />;
              break;
            case 'Payments':
              icon = <Icons.Payments fill={color} />;
              break;
            case 'Credit':
              icon = <Icons.Credit fill={color} />;
              break;
            case 'Profile':
              icon = <Icons.Profile fill={color} />;
              break;
          }

          return icon;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.accent,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Debit Card" component={DebitCard} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Credit" component={CreditScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SetLimit"
            component={SetLimit}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
