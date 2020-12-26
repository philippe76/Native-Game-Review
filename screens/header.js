import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' style={styles.icon} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: '#00ffff',     
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
        letterSpacing: 1,
        color: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#333',
        textShadowRadius: 2,

    },
    icon: {
        fontSize: 28,
        color: 'white',
        position: 'absolute',        
        left: 16,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#333',
        textShadowRadius: 1,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})

export default Header;