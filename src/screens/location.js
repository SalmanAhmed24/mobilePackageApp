import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { allNetworks } from '../utils/constants';
import AppLoading from 'expo-app-loading';
import * as Linking from 'expo-linking';
// import call from 'react-native-phone-call';
import Ussd from 'react-native-ussd';
import {
	useFonts,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
const deviceWidth = Dimensions.get('window').width;
const LocationScreen = (props) => {
	let [ fontsLoaded ] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold
	});
	const specificNetwork = allNetworks.find((item) => item.name == props.route.params.name);

	console.log('this is specific network', props.route.params.name);
	const onPressHandler = (code) => {
		let number = '';
		if (Platform.OS === 'ios') {
			number = `telprompt:${code}`;
			Linking.openURL(number);
		} else {
			number = `tel:${encodeURIComponent(code)}`;
			Linking.openURL(number);
		}
		console.log('this is code', code);
	};
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.mainHead}>Location Based Packages</Text>
					{specificNetwork &&
						specificNetwork.location.map((item) => {
							return (
								<TouchableOpacity
									onPress={() => onPressHandler(item.code)}
									style={styles.cardPress}
									key={item.id}
								>
									<View style={styles.cardCont}>
										<Text style={styles.text}>{item.name}</Text>
										<Text style={styles.textDial}>Dial {item.code}</Text>
										<View style={styles.detailCon}>
											<View style={styles.innerCon}>
												<Image
													style={styles.cardImg}
													source={require('../../assets/images/coin.png')}
												/>
												<Text style={styles.headCard}>Price</Text>
												<Text style={styles.paraCard}>{item.price}</Text>
											</View>
											{item.internet ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/wi.png')}
													/>
													<Text style={styles.headCard}>Internet</Text>
													<Text style={styles.paraCard}>
														{item.internetAmount}
														{item.timeLimitFlag && item.netTimeLimit !== 'none' ? (
															item.netTimeLimit
														) : (
															''
														)}
													</Text>
												</View>
											) : null}
											{item.whatsapp ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/what.png')}
													/>
													<Text style={styles.headCard}>Whatsapp</Text>
													<Text style={styles.paraCard}>{item.whatsappAmount}</Text>
												</View>
											) : null}
											{item.offminutes ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/phone2.png')}
													/>
													<Text style={styles.headCard}>Off-net Mins</Text>
													<Text style={styles.paraCard}>{item.offminuteAmount} Min</Text>
												</View>
											) : null}
											{item.minutes ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/phone.png')}
													/>
													<Text style={styles.headCard}>{specificNetwork.name} Mins</Text>
													<Text style={styles.paraCard}>{item.minuteAmount} Min</Text>
												</View>
											) : null}
											{item.otherNetworkMin ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/phone.png')}
													/>
													<Text style={styles.headCard}>Other Mins</Text>
													<Text style={styles.paraCard}>{item.otherNetworkMin} Min</Text>
												</View>
											) : null}
											{item.smsOpt ? (
												<View style={styles.innerCon}>
													<Image
														style={styles.cardImg}
														source={require('../../assets/images/sms.png')}
													/>
													<Text style={styles.headCard}>SMS</Text>
													<Text style={styles.paraCard}>{item.smsAmount}</Text>
												</View>
											) : null}
											<View style={styles.innerCon}>
												<Image
													style={styles.cardImg}
													source={require('../../assets/images/sch.png')}
												/>
												<Text style={styles.headCard}>Validity</Text>
												<Text style={styles.paraCard}>{item.days} Days</Text>
											</View>
										</View>
									</View>
								</TouchableOpacity>
							);
						})}
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
	mainHead: {
		fontSize: 25,
		fontFamily: 'Montserrat_700Bold',
		marginTop: 50,
		marginBottom: 50
	},
	text: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
		marginTop: 10,
		color: '#8dc63f',
		marginBottom: 15,
		textAlign: 'center'
	},
	textDial: {
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 20,
		marginTop: 10,
		color: '#ec2591',
		marginBottom: 15,
		marginTop: 5
	},
	cardCont: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	cardPress: {
		borderColor: '#ec2591',
		// backgroundColor: '#8dc63f',
		borderRadius: 10,
		borderWidth: 0.5,
		width: deviceWidth / 1.2,
		marginBottom: 20
	},
	detailCon: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	innerCon: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10
	},
	cardImg: {
		width: 40,
		height: 40
	},
	headCard: {
		fontFamily: 'Montserrat_600SemiBold',
		color: '#ec2591',
		marginTop: 10
	},
	paraCard: {
		fontFamily: 'Montserrat_700Bold',
		color: '#8dc63f',
		textAlign: 'center',
		fontSize: 12
	}
});
