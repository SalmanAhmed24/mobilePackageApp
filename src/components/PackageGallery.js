import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { navigationIconHome } from '../utils/constants';
import { SliderBox } from 'react-native-image-slider-box';
const windowWidth = Dimensions.get('window').width;

const PackageGallery = ({ navigationProps }) => {
	const navigateTo = (navTo) => {
		navigationProps.navigation.push(navTo);
	};
	const images = [
		require('../../assets/images/jazz-weekly-mega.jpg'),
		require('../../assets/images/jazz-daily-sms.png'),
		require('../../assets/images/jazz-hybrid.png'),
		require('../../assets/images/jazz-sindh.png')
	];
	return (
		<View style={styles.galleryContainer}>
			<SliderBox
				images={images}
				sliderBoxHeight={250}
				autoplay={true}
				circleLoop={true}
				paginationBoxStyle={{
					position: 'absolute',
					bottom: -35
				}}
				ImageComponentStyle={{
					width: windowWidth / 1.07,
					borderRadius: 30
				}}
				dotColor="red"
				inactiveDotColor="#f4c430"
			/>
		</View>
	);
};
export default PackageGallery;

const styles = StyleSheet.create({
	galleryContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 30
	},
	iconsWrap: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 0
	},
	jazzBanner: {
		width: windowWidth / 1.07,
		height: 200,
		borderRadius: 30
	}
});
