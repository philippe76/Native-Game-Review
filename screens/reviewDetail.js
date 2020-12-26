import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../styles/global';
import Card from './card'

const ReviewDetail = ({ navigation }) => {

    return (
        <View style={globalStyle.container}>
            <Card>
                <Text style={globalStyle.titleText}>{ navigation.getParam('title') }</Text>
                <Text style={globalStyle.titleText}>{ navigation.getParam('body') }</Text>
                <Text style={globalStyle.titleText}>Rating: { navigation.getParam('rating') }</Text>
            </Card>
        </View>
    )
}


export default ReviewDetail;