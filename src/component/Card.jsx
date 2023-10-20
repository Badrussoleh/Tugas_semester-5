import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text> kartu </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'blue',
        margin: 10,
        padding: 30,
    }
})