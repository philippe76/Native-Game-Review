import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyle from '../styles/global'

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return (
        <View style={globalStyle.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetail', item)}>
                        <Text style={{...globalStyle.titleText}, styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 10,
        backgroundColor: '#fff', 
        padding: 10
    }
})

export default Home;