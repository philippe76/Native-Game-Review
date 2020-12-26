import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyle, images } from '../styles/global';
import Card from './card'

const ReviewDetail = ({ navigation }) => {

    return (
        <View style={globalStyle.container}>
            <Card>
                <Text style={globalStyle.titleText}>{ navigation.getParam('title') }</Text>
                <Text style={globalStyle.titleText}>{ navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={ images.rating[navigation.getParam('rating')] }/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1, 
        borderTopColor: '#eee'
    }
})

export default ReviewDetail;