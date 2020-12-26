import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../screens/header';


const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
                headerBackground: () => <Image source = {require ('../assets/game_bg.png')} style = {{height: '100%', opacity: 0.8, backgroundColor: '#00ffff'}} />
            }
        } 
    }
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00ffff',
            height: 120
        },
        headerTitleStyle: {
            color: 'white',
            textAlign: 'center',
            fontSize: 25
        }
    }
});

export default AboutStack;

