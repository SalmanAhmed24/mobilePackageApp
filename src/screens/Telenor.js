import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

const Telenor = () => {
	let [ fontsLoaded ] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.imageWrap}>
					<Image style={styles.image} source={require('../../assets/images/telenor.png')} />
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.mainHeading}>All Telenor Packages</Text>
					<Text style={styles.subHeading}>SMS, CALL, INTERNET 3G/4G</Text>
				</View>
				<View style={styles.infoContainer}>
					<TouchableOpacity style={styles.innerInfo}>
						<Image style={styles.iconImg} source={require('../../assets/images/phone.png')} />
						<Text style={styles.detail}>Call Packages</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.innerInfo}>
						<Image style={styles.iconImg} source={require('../../assets/images/sms.png')} />
						<Text style={styles.detail}>SMS Packages</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.innerInfo}>
						<Image style={styles.iconImg} source={require('../../assets/images/wifi.png')} />
						<Text style={styles.detail}>Internet Packages</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.innerInfo}>
						<Image style={styles.iconImg} source={require('../../assets/images/location.png')} />
						<Text style={styles.detail}>Location Based Offers</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.innerInfo}>
						<Image style={styles.iconHybirdImg} source={require('../../assets/images/hybird.png')} />
						<Text style={styles.detail}>Hybird Packages</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};
export default Telenor;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: 50,
		paddingLeft: 10,
		paddingRight: 10
	},
	text: {
		fontFamily: 'Montserrat_600SemiBold'
	},
	imageWrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: -100,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
		opacity: 0.15
	},
	image: {
		width: 400,
		height: 450
	},
	infoContainer: {
		flex: 0.2
	},
	mainHeading: {
		marginTop: 10,
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 33,
		textTransform: 'uppercase',
		textAlign: 'center'
	},
	subHeading: {
		fontSize: 16,
		fontFamily: 'Montserrat_400Regular',
		textAlign: 'center'
	},
	iconImg: {
		width: 60,
		height: 60
	},
	detail: {
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 16
	},
	innerInfo: {
		marginBottom: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconHybirdImg: {
		width: 85,
		height: 85
	}
});
