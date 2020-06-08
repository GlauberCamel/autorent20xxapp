/**
 * Desenvolvido por ghcb
 * 01/06/2020
 */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AnnouncementsView from './components/AnnouncementsView';
import PublicationView from './components/PublicationView';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="AnnouncementsView">
      <Stack.Screen
        name="AnnouncementsView"
        options={{title: 'Anúncios'}}
        component={AnnouncementsView}
      />
      <Stack.Screen
        name="PublicationView"
        options={{title: 'Publicação'}}
        component={PublicationView}
      />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
