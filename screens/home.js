import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/global';
import Card from './card';
import ReviewForm from './reviewForm';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    const [modalOPen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 2, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return (
        <View style={globalStyle.container}>
            <Modal visible={modalOPen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons name='close' size={30} style={{...styles.modalToggle, ...styles.modalClose}} onPress={() => setModalOpen(false)} />
                    <ReviewForm />
                </View>
            </Modal>
            
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ReviewDetail', item)}>
                        <Card>
                            <Text style={{...globalStyle.titleText}}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <View style={{flex: 6}}>
                <MaterialIcons name='add' size={30} style={styles.modalToggle} onPress={() => setModalOpen(true)} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        padding: 10, 
        alignSelf: 'center',
        borderRadius: 6,
        elevation: 3, 
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    modalContent: {
        flex: 1
    },
    modalClose: {
        marginVertical: 50,
        marginBottom: 50
    }
})

export default Home;