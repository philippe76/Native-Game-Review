import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../styles/global'

const About = () => {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>About Screen</Text>
        </View>
    )
}

export default About;