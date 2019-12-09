import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {NavigationActions} from 'react-navigation';


export default class Kategori extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          Kategori
        </Text>
        
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
   row: {
    flexDirection: 'row'},
  judul: {
    fontSize: 50,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    color:'white'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#266771'
  }
})