import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import axios from 'axios';

export class BuscarPais extends Component {
    constructor(props) {
        super(props);
        this.state = {
          done: false,
          response: []
        }
      }
    
      handlerText(text) {
        var pais = text;
        this.setState({ value: pais });
      }
    
    
      handlerButton = () => {
        var buscar = this.state.value;
        axios.get('https://restcountries.eu/rest/v2/name/'+buscar)
        .then(res => {
          console.log(res);
          if (res.data != false) {
            this.setState({
              response: res.data[0],
              done: true
            })
          } else {
            console.log("Error");
          }
        });
      }
    
      render() {
    
        if (this.state.done !== true) {
          return (
            <View style={styles.container}>
              <ImageBackground source={require('../img/fondoapp.jpg')} style= { styles.backgroundImage } >
              <Text style={{fontSize: 25, color: "#ffebee", margin: 5}}>Ingrese el país que busca</Text>
              <Text style={{fontSize: 18, color: "#ffffff", marginBottom: 10}}>En inglés por favor</Text>
              <TextInput
                style={{
                  height: 40,
                  width: 250,
                  borderColor: '#ffffff',
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 10
                }}
                placeholder='Escriba aquí...'
                onChangeText={this.handlerText.bind(this)}
              />
              <Button
                title="Buscar Información"
                color="#af0039"
                onPress={this.handlerButton.bind(this)}
              />
              </ImageBackground>
            </View>)
        } else {
          return (
            <View style={styles.container}>
              <ImageBackground source={require('../img/fondoapp.jpg')} style= { styles.backgroundImage } >
              <Text style={{fontSize: 25, color: "#ffebee", margin: 5}}>Para datos de otro país</Text>
              <Text style={{fontSize: 18, color: "#ffffff", marginBottom: 10}}>Ingrese su nombre aquí</Text>
              <TextInput
                style={{
                  height: 40,
                  width: 250,
                  borderColor: '#ffffff',
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 10
                }}
                placeholder='Escriba aquí'
                onChangeText={this.handlerText.bind(this)}
              />
              <Button title="Buscar Información" color="#af0039" onPress={this.handlerButton.bind(this)} />
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Nombre: {this.state.response.name} </Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Capital: {this.state.response.capital}</Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Población: {this.state.response.population} habitantes</Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Idioma: {this.state.response.languages[0].name}</Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Moneda: {this.state.response.currencies[0].name}</Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Área: {this.state.response.area} km2</Text>
              <Text style={{color: '#ffebee', fontSize: 20, margin: 5}}>Continente: {this.state.response.region} </Text>
              </ImageBackground>
            </View>
          );
        }
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });