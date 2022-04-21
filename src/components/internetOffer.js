import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { internetOffer } from '../utils/constants';
import * as Linking from 'expo-linking';
// fonts
import {
	useFonts,
	RobotoCondensed_300Light,
	RobotoCondensed_300Light_Italic,
	RobotoCondensed_400Regular,
	RobotoCondensed_400Regular_Italic,
	RobotoCondensed_700Bold,
	RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';

const deviceWidth = Dimensions.get('window').width;
const onPressHandler = (code) => {
	let number = '';
	if (Platform.OS === 'ios') {
		number = `telprompt:${code}`;
		Linking.openURL(number);
	} else {
		number = `tel:${encodeURIComponent(code)}`;
		Linking.openURL(number);
	}
};
const Item = ({ itemObj }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{itemObj.name}</Text>
		<Text style={styles.type}>{itemObj.type}</Text>
		{itemObj.internet ? (
			<View style={styles.infoCon}>
				<Text style={styles.data}>Data</Text>
				<Text style={styles.infoText}>{itemObj.internetAmount}</Text>
			</View>
		) : null}
		{itemObj.minutes ? (
			<View style={styles.infoCon}>
				<Text style={styles.data}>Minutes</Text>
				<Text style={styles.infoText}>{itemObj.minuteAmount} min</Text>
			</View>
		) : null}
		{itemObj.otherNetworkMinFlag ? (
			<View style={styles.infoCon}>
				<Text style={styles.data}>Other Networks</Text>
				<Text style={styles.infoText}>{itemObj.otherNetworkMin} min</Text>
			</View>
		) : null}
		{itemObj.smsOpt ? (
			<View style={styles.infoCon}>
				<Text style={styles.data}>SMS</Text>
				<Text style={styles.infoText}>{itemObj.smsAmount} sms</Text>
			</View>
		) : null}
		<View style={styles.infoPriceCon}>
			<Text style={styles.price}>Price</Text>
			<Text style={styles.infoPriceText}>{itemObj.price}</Text>
		</View>
		<View style={styles.subscribeBtnWrap}>
			<TouchableOpacity style={styles.subscribe} onPress={() => onPressHandler(itemObj.code)}>
				<Text style={styles.subText}>Subscribe</Text>
			</TouchableOpacity>
		</View>
	</View>
);

function InternetOffer({ navigationProps }) {
	const renderItem = ({ item }) => <Item itemObj={item} />;
	const navigationHandler = () => {
		navigationProps.navigation.push(`Internet`, {
			name: 'Home'
		});
	};
	// functions
	let [ fontsLoaded ] = useFonts({
		RobotoCondensed_300Light,
		RobotoCondensed_300Light_Italic,
		RobotoCondensed_400Regular,
		RobotoCondensed_400Regular_Italic,
		RobotoCondensed_700Bold,
		RobotoCondensed_700Bold_Italic
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.mainHeadCon}>
					<Text style={styles.mainHead}>Internet Offers</Text>
					<TouchableOpacity onPress={navigationHandler}>
						<Text style={styles.seeAll}>See All</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					style={styles.listWrap}
					horizontal={true}
					data={internetOffer}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		);
	}
}

export default InternetOffer;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 320,
		paddingLeft: 0,
		paddingTop: 0,
		paddingBottom: 10,
		width: deviceWidth
	},
	mainHead: {
		paddingLeft: 20,
		fontFamily: 'RobotoCondensed_700Bold',
		fontSize: 20,
		textTransform: 'uppercase'
	},
	item: {
		backgroundColor: '#fff',
		padding: 10,
		marginTop: 20,
		marginLeft: 15,
		borderRadius: 20,
		width: 230,
		height: 200,
		shadowColor: '#000',
		shadowRadius: 20,
		shadowOffset: {
			width: 1,
			height: 3
		},
		elevation: 3
	},
	title: {
		fontSize: 14
	},
	listWrap: {
		paddingBottom: 30
	},
	seeAll: {
		fontFamily: 'RobotoCondensed_300Light_Italic',
		fontSize: 18,
		marginRight: 15,
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid',
		textDecorationColor: '#000'
	},
	mainHeadCon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: deviceWidth
	},
	title: {
		color: '#ee1d23',
		fontFamily: 'RobotoCondensed_400Regular_Italic',
		fontSize: 16,
		paddingTop: 10,
		textTransform: 'uppercase',
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid'
	},
	type: {
		marginTop: 5,
		fontFamily: 'RobotoCondensed_700Bold'
	},
	data: {
		marginTop: 2,
		fontFamily: 'RobotoCondensed_700Bold',
		fontSize: 16
	},
	price: {
		marginTop: 2,
		fontFamily: 'RobotoCondensed_700Bold',
		fontSize: 18
	},
	infoCon: {
		flexDirection: 'row'
	},
	infoPriceCon: {
		marginTop: 0,
		flexDirection: 'row'
	},
	infoText: {
		alignSelf: 'center',
		fontFamily: 'RobotoCondensed_400Regular',
		marginLeft: 10,
		marginTop: 2,
		fontSize: 16
	},
	infoPriceText: {
		alignSelf: 'center',
		fontFamily: 'RobotoCondensed_400Regular',
		marginLeft: 10,
		marginTop: 2,
		fontSize: 18
	},
	subscribeBtnWrap: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginTop: 10
	},
	subscribe: {
		backgroundColor: 'rgba(238, 29, 35,0.9)',
		padding: 10,
		borderRadius: 5
	},
	subText: {
		fontFamily: 'RobotoCondensed_400Regular',
		color: '#fff',
		textTransform: 'uppercase'
	}
});
