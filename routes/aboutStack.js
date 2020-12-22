import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'Game Zone'
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

