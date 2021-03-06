import React from 'react'
import {
  View,
  image,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {NavigationActions} from 'react-navigation';


export default class Pesan extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          Pesanku
        </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
   row: {
    flexDirection: 'row'},
  judul: {
    fontSize: 20,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
})