import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
	useFonts,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
import PackageGallery from '../components/PackageGallery';

const Home = (props) => {
	let [ fontsLoaded ] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
		Montserrat_600SemiBold
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.mainWrap}>
				<Text style={styles.heading}>Select Network</Text>
				<ScrollView>
					<PackageGallery navigationProps={props} />
				</ScrollView>
				<Image source={require('../../assets/images/blob.png')} style={styles.blobImage} />
				<Image source={require('../../assets/images/blob.png')} style={styles.blobImage2} />
				<Image source={require('../../assets/images/mob-bg.png')} style={styles.mobBG} />
			</View>
		);
	}
};
const styles = StyleSheet.create({
	mainWrap: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	heading: {
		color: '#4C4C4C',
		fontSize: 35,
		fontFamily: 'Montserrat_600SemiBold',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	blobImage: {
		width: 300,
		height: 300,
		position: 'absolute',
		top: -100,
		right: -180,
		opacity: 0.2
	},
	blobImage2: {
		width: 200,
		height: 200,
		position: 'absolute',
		bottom: -100,
		left: -100,
		opacity: 0.2
	},
	mobBG: {
		width: 500,
		height: 500,
		position: 'absolute',
		bottom: -80,
		zIndex: -1,
		left: 10,
		opacity: 0.7
	}
});
export default Home;
