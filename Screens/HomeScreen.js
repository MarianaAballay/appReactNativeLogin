import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
//const image = { uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F150166968800306888%2F&psig=AOvVaw2PiGc9y2GNAWwycXqPSqqO&ust=1606867294396000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjdh6y9q-0CFQAAAAAdAAAAABAF" };

export class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    handlerBtn(){
        this.props.navigation.navigate("Search");
    }
    render(){
        return(
            <View style={{ flex: 1}}>
                <ImageBackground source={require('../img/fondoapp.jpg')} style= { styles.backgroundImage } >
                <Image source={require('../img/logodata.png')} style={{flex: 0.2}} resizeMode='contain' />
                <Text style={{color: "#ffffff", fontSize: 25, margin: 10}}>Bienvenido/a a DataCountry</Text>
                <Button title="Iniciar la búsqueda" color= "#af0039" onPress={() => this.handlerBtn()}></Button>
                </ImageBackground>
          </View>
        );
    }
    
}
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  
  export default HomeScreen;