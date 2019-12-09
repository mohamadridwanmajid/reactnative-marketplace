import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
  } from 'react-native';


const userinfo ={username: 'admin', password: 'admin'}


export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
    this.masuk = this.masuk.bind(this)
  }

  pindah = () => {
    this.props.navigation.navigate('Beranda');
  };

 masuk() {
  console.log(this.state,'admin')
   if (this.state.username == userinfo.username && this.state.password == userinfo.password) {
      this.props.navigation.navigate('Beranda')
   } 
   else {
      alert('nama pengguna atau sandi salah.')
   }

 }

render(){
  return(
    <View behavior="padding" style={styles.Wrapper}>

      <Text style={styles.judul}>Masuk</Text>

      <TextInput
        placeholder='username'
        underlineColorAndroid='white'
        placeholderTextColor='white'
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        autoCapitalize="none"
        style={styles.inputField}/>

      <TextInput
        placeholder='password'
        underlineColorAndroid='white'
        placeholderTextColor='white'
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        style={styles.inputField}/>

      <TouchableOpacity style={styles.btLogin} onPress={this.masuk}>
        <Text style={styles.buttonLogin}>Masuk</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:5, marginTop: 10, marginBottom:20, fontWeight:'bold', fontSize:10}}>Sudah Punya Akun?</Text>
      <TouchableOpacity style={styles.row} onPress={() => this.props.navigation.navigate('Register')}>
        <Text style={{color:'black', marginTop: 10, marginBottom:20, fontWeight:'bold', fontSize:10}}>Daftar</Text>
      </TouchableOpacity>
      </View>

    </View>
    )
  }

}


const styles = StyleSheet.create({
inputField: {
  width: 280,
  color: 'white',
  borderColor: 'white',
  marginTop: 5
  },
 buttonLogin: {
  width: 50,
  borderRadius: 5,
  borderWidth: 2,
  borderColor: 'black',
  backgroundColor: '#ffffff',
  },
Wrapper : {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'gray'
  },

row: {
  flexDirection: 'row',
  },
judul :{
  color:'white',
  marginTop: 20,
  fontWeight:'bold',
  fontSize :50 
  },

text :{
  color: 'blue',
  fontSize: 23
  },

  
});