import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { navigationIconHome } from '../utils/constants';
const PackageGallery = ({ navigationProps }) => {
	const navigateTo = (navTo) => {
		navigationProps.navigation.push(navTo);
	};
	return (
		<View style={styles.galleryContainer}>
			{navigationIconHome && navigationIconHome.length ? (
				navigationIconHome.map((item) => {
					return (
						<TouchableOpacity style={styles.iconsWrap} key={item.id} onPress={() => navigateTo(item.navTo)}>
							<Image style={{ width: item.width, height: item.height }} source={item.imageUrl} />
						</TouchableOpacity>
					);
				})
			) : null}
		</View>
	);
};
export default PackageGallery;

const styles = StyleSheet.create({
	galleryContainer: {
		flex: 1,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	iconsWrap: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 20
	}
});
