import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HybirdScreen from './src/screens/hybird';
import InternetScreen from './src/screens/internet';
import SMSOFFerScreen from './src/screens/smsOffer';
import LocationScreen from './src/screens/location';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const StackNav = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<StackNav.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: true,
					headerTitleAlign: 'center'
				}}
			>
				<StackNav.Screen name="Home" component={Home} />
				<StackNav.Screen name="Hybrid" component={HybirdScreen} />
				<StackNav.Screen name="Internet" component={InternetScreen} />
				<StackNav.Screen name="SMSOffer" component={SMSOFFerScreen} />
				<StackNav.Screen name="Location" component={LocationScreen} />
			</StackNav.Navigator>
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: deviceHeight
	}
});
