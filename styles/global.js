import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
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
    }
})

export default globalStyle;