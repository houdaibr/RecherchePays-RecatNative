import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import pageDeRecherche from './pageDeRecherche';
import ResultatsDeRecherche from './ResultatsDeRecherche';
const Pile = createStackNavigator();
function MaPile() {
  return (
    <Pile.Navigator>
      <Pile.Screen name="Accueil" component={pageDeRecherche} />
      <Pile.Screen name="Resultats" component={ResultatsDeRecherche}/>
    </Pile.Navigator>
  );
}
const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
export default function App() {
  return (
    <React.StrictMode>
    <NavigationContainer>
    <MaPile />
    </NavigationContainer>
    </React.StrictMode>
  );
}
