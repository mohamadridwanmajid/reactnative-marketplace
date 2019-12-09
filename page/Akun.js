import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {NavigationActions} from 'react-navigation';


export default class Akun extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.headerText}>Akun Kamu</Text>                
          </View>

        </View>

        <View style={styles.pilih}>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity> 
            <Text style={styles.pilihan}>Akun Pembeli</Text> 
           </TouchableOpacity>                
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.pilihan}>Akun Toko</Text> 
            </TouchableOpacity>      
          </View>    
        </View>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={styles.btLogin}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 12}}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btLogin}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontSize: 12}}>Daftar</Text>
            </TouchableOpacity>
        </View>
              

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('../image/home.png')}
            />
            <Text style={styles.footerText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorit')}>
            <View>
            <Image 
           style={styles.footerImage}
           source={require('../image/love.png')}
          />
          <Text style={styles.footerText}>Favorit</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Saldo')}>
            <View>
              <Image 
               style={styles.footerImage}
               source={require('../image/dompet.png')}
               />
              <Text style={styles.footerText}>Saldo</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Belanja')}>
            <View>
              <Image 
               style={styles.footerImage}
               source={require('../image/transaksi.png')}
               />
              <Text style={styles.footerText}>Transaksi</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
            <View>
              <Image 
               style={styles.footerImage}
               source={require('../image/akun.png')}
              />
              <Text style={styles.footerText}>Akun</Text>
            </View>
          </TouchableOpacity>
            
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor:'white',
   
   },
   pilih: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#ffffff',
    height: 50,
  },
   pilihan:{
     marginRight:50,
     marginLeft:20,
     marginTop:55
   },

   scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AEB6BF',
  },

   btLogin: {
    flex : 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 340,
    backgroundColor: '#ffffff',
    marginHorizontal : 20,
  },

   footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:7,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#ffffff',
    height: 50,
  },
    footerImage:{
    width:20,
    height:20,
    alignSelf:'center'
  },
  footerText:{
    color:'black',
    fontSize: 12
  }

})