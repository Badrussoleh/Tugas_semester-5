import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Tombol = ({label, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.boxTombol}>
            <Text style={styles.tex}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Tombol;

const styles = StyleSheet.create({
    tex: {
        fontSize: 20,
    },
    boxTombol: {
        backgroundColor: 'yellow',
        margin: 2,
        alignItems: 'center'
    },
});