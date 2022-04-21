import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import PackageGallery from '../components/PackageGallery';
import SpecialOffer from '../components/specialOffers';
import InternetOffer from '../components/internetOffer';
import SMSOffer from '../components/smsOffer';
import LocationOffer from '../components/locationOffer';

const Home = (props) => {
	return (
		<View style={styles.mainWrap}>
			<ScrollView>
				<PackageGallery navigationProps={props} />
				<SpecialOffer navigationProps={props} />
				<InternetOffer navigationProps={props} />
				<SMSOffer navigationProps={props} />
				<LocationOffer navigationProps={props} />
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	mainWrap: {
		flex: 1,
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
});
export default Home;
