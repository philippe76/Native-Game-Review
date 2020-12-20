import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Game Zone'
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

export default createAppContainer(HomeStack);

