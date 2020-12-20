import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from '../styles/global'

const ReviewDetail = ({ navigation }) => {

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={globalStyle.titleText}>{ navigation.getParam('body') }</Text>
            <Text style={globalStyle.titleText}>Rating: { navigation.getParam('rating') }</Text>
        </View>
    )
}


export default ReviewDetail;