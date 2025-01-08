import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            
        </View>,
        <Text style={styles.Title}>
            Login Screen
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d4d4d4',
        
    },
});