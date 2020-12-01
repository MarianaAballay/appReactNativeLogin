
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {BuscarPais} from "../Screens/BuscarPais";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    constructor(props) {
        super(props);
    }

    handlerLogout = () => {
        this.props.onLogout();
    }

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                styles
                drawerContent={props => <DrawerContentScreen onLogoutPress={this.handlerLogout} {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Search" component={BuscarPais} />
            </Drawer.Navigator>
        );
    }
    
}

