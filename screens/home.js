import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../styles/global'

const Home = () => {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
        </View>
    )
}

export default Home;