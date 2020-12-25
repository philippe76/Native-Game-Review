import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../screens/header';


const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>
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

