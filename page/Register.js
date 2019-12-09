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


export default class Register extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          Daftar
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
       
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        
      <View style={styles.row}>
            <TouchableOpacity style={styles.btLogin}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 12}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btLogin}
              onPress={() => this.push()}>
              <Text style={{fontSize: 12}}>Save</Text>
            </TouchableOpacity>
          </View>
         
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
  input: {
    width: 300,
    height: 55,
    backgroundColor: 'gray',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
  },

    btLogin: {
    flex : 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 40,
    backgroundColor: '#fff',
    marginHorizontal : 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})