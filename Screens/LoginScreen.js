import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { View, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import * as Google from 'expo-google-app-auth'

export class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "358773703020-35latn9ht449n6mf8jae7um1djbp35mh.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/back.png')} style={{flex: 1, justifyContent: "center"}} resizeMode="cover">
                <Image source={require('../img/logodata.png')} style={{flex: 0.2}} resizeMode='contain' />
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                    color = "#78002e"
                />
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

