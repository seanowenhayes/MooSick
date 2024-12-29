import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, this is the Index view!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
});

export default Index;