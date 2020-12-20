import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from '../styles/global'

const ReviewDetail = ({ navigation }) => {

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>ReviewDetail Screen</Text>
            <Button title='Back to Home'  color='#bbb' onPress={pressHandler}/>
        </View>
    )
}


export default ReviewDetail;