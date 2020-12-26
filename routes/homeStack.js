import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';
import Header from '../screens/header';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
                headerBackground: () => <Image source = {require ('../assets/game_bg.png')} style = {{height: '100%', opacity: 0.8, backgroundColor: '#00ffff'}} />
            }
        } 
    },
    ReviewDetail: {
        screen: ReviewDetail,
        navigationOptions: {
            title: 'Review Details'            
        }
    }
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 120
        },
        headerTitleStyle: {
            color: 'white',
            textAlign: 'center',
            fontSize: 25
        }
    }
});

export default HomeStack;

