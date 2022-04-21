import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { allNetworks } from '../utils/constants';
import AppLoading from 'expo-app-loading';
import * as Linking from 'expo-linking';
// import call from 'react-native-phone-call';
import Ussd from 'react-native-ussd';
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
		<View style={styles.headWrap}>
			<Text style={styles.title}>{itemObj.name}</Text>
		</View>
		<View style={styles.addInfo}>
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
					<Text style={styles.data}>Networks</Text>
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
		</View>
		<View style={styles.subscribeBtnWrap}>
			<TouchableOpacity style={styles.subscribe} onPress={() => onPressHandler(itemObj.code)}>
				<Text style={styles.subText}>Subscribe</Text>
			</TouchableOpacity>
		</View>
	</View>
);
const LocationScreen = (props) => {
	const renderItem = ({ item }) => <Item itemObj={item} />;
	let [ fontsLoaded ] = useFonts({
		RobotoCondensed_300Light,
		RobotoCondensed_300Light_Italic,
		RobotoCondensed_400Regular,
		RobotoCondensed_400Regular_Italic,
		RobotoCondensed_700Bold,
		RobotoCondensed_700Bold_Italic
	});
	const specificNetwork = allNetworks.find((item) => item.name == 'Jazz');
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Image style={styles.mainImg} source={require('../../assets/images/jazz-sindh.png')} />
					<FlatList
						style={styles.listWrap}
						horizontal={false}
						data={specificNetwork.location}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</ScrollView>
		);
	}
};
export default LocationScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	mainImg: {
		marginTop: 20,
		marginBottom: 20,
		width: deviceWidth / 1.1,
		height: 250,
		borderRadius: 20
	},
	listWrap: {
		paddingBottom: 30,
		width: deviceWidth / 1.1
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
	item: {
		backgroundColor: '#fff',
		padding: 10,
		marginTop: 20,
		marginLeft: 5,
		borderRadius: 20,
		width: deviceWidth / 1.15,
		height: 220,
		shadowColor: '#000',
		shadowRadius: 25,
		shadowOffset: {
			width: 2,
			height: 3
		},
		elevation: 3
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
		marginTop: 10,
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
		flexDirection: 'row',
		width: 200
	},
	infoPriceCon: {
		marginTop: 0,
		flexDirection: 'row'
	},
	infoText: {
		alignSelf: 'center',
		fontFamily: 'RobotoCondensed_400Regular',
		marginLeft: 3,
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
		marginTop: 3
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
	},
	headWrap: {
		width: deviceWidth / 1.3
	},
	addInfo: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});
