import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40        
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1, 
        borderColor: '#ddd',
        padding: 5,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        padding: 7,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export const images = {
    rating: {
        1: require('../assets/rating-1.png'),
        2: require('../assets/rating-2.png'),
        3: require('../assets/rating-3.png'),
        4: require('../assets/rating-4.png'),
        5: require('../assets/rating-5.png'),
    }
} 

