import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native'
import Tombol from '../component/Tombol';

export default class Akun extends Component {
    render() {
        return (
            <View>
                <Text style={styles.judul}>
                    <Text style={{color: 'cornflowerblue', fontStyle: 'normal', fontWeight: 'bold'}}>Hiii </Text>
                    Badrus</Text>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Beranda')}>
                    <Text>Ke Beranda</Text>
                </TouchableOpacity>
            </View>
        )
    };
}


const styles = StyleSheet.create({
    judul: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
        marginTop: 5,
        backgroundColor: 'mintcream',
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        marginBottom: 10,
    },
})