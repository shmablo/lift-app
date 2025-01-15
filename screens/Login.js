import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        configureGoogleSignIn();
    }, []);

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
            webClientId: 'YOUR_WEB_CLIENT_ID_HERE', // Get this from Google Cloud Console
            offlineAccess: true,
        });
    };

    const handleLogin = () => {
        // Implement login logic here
        console.log('Login pressed');
    };

    const handleRegister = () => {
        // Implement registration logic here
        console.log('Register pressed');
    };

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const {idToken, accessToken, profile} = userInfo;
            //Use the user info to authenticate the user
            console.log('Google Sign-In successful', userInfo);
            // Here you would typically send the user info to your backend
            // or update your app's state to reflect that the user is signed in
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('Google Sign-In was cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Google Sign-In is already in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services not available');
            } else {
                console.error('Google Sign-In error:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lift App!!!</Text>
            <Image 
                source={require('../assets/lift-app-icon.png')}
                style={styles.logo}
            />
            
            <TextInput
                style={styles.input}
                placeholder="biglifter@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
                <Image 
                    source={require('../assets/google-logo.png')}
                    style={styles.googleIcon}
                />
                <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 50,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    googleButton: {
        width: '80%',
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 35,
        borderRadius: 75,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
});

