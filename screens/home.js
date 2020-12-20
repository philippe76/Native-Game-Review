import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from '../styles/global'

const Home = ({ navigation }) => {

    const pressHandler = () => {
        // navigation.navigate('ReviewDetail');   
        navigation.push('ReviewDetail');   
    }

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
            <Button title= 'Go to Review ' color='#bbb' onPress={pressHandler}/>
        </View>
    )
}

export default Home;