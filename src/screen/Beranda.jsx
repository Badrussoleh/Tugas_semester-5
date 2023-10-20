import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, } from 'react-native'
import Tombol from '../component/Tombol';

export default class Beranda extends Component {
    render() {
        return (
            <View>
                <Text style={styles.judul}>
                    <Text style={{color: 'cornflowerblue', fontStyle: 'normal', fontWeight: 'bold'}}>Mari</Text>
                    Belajar</Text>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Akun')}>
                    <Text>Ke Akun</Text>
                </TouchableOpacity>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    judul: {
        color: 'dimgray',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'right',
        marginTop: 5,
        backgroundColor: 'mintcream',
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 5,
        marginBottom: 10,
    },
})