import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Button,StyleSheet } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const styles = StyleSheet.create({
    
    tinyLogo: {
        width: 66,
        height: 58,
      },
    logo: {
      width: 66,
      height: 58,
    },
  });
function Home(props) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <Image
        style={styles.tinyLogo}
        source={require('../img/dmc4.jpg')}
      />
      <Image
        style={styles.logo}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
            <Text style={{ fontSize: 20 }}>Home </Text>
            <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#ff5202', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Fomulario')}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Ir a Formulario</Text>
            </TouchableOpacity>
        </View>
    );
}
function Fomulario() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
            <Text style={{ fontSize: 20 }}> Formulario </Text>
        </View>
    );
}
function Mapa() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Mapa</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator()
function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name="Home" component={Home} 
        />
                <Drawer.Screen name="Fomulario" component={Fomulario} />
                <Drawer.Screen name="Mapa" component={Mapa} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer;