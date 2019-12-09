import React from 'react';
import {NavigationActions} from 'react-navigation';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

function List({ title, harga, img }) {
    return (
      <View style={styles.item}>
        <Image style={styles.thumb}  source={img} />
        <Text style={styles.jdul}>{title}</Text>
        <Text style={styles.harga}>{harga}</Text>
        <TouchableOpacity>
        <Image
            style={styles.iconcart}
            source={require('../image/shop.png')}
          />
         </TouchableOpacity>
        
      </View>
    );
  }

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      marketlist: [
        {
          img: require('../image/produk/1.jpg'),
          nama: 'All Star',
          harga: 'Rp. 900.000'
        },
        {
          img: require('../image/produk/2.jpg'),
          nama: 'Chuck 70',
          harga: 'Rp. 1.200.000'
        },
        {
          img: require('../image/produk/3.jpg'),
          nama: 'Converse x',
          harga: 'Rp. 1.300.000'
        },
        {
          img: require('../image/produk/4.jpg'),
          nama: 'Dark Tiger',
          harga: 'Rp. 1.150.000'
        },
        {
          img: require('../image/produk/5.jpg'),
          nama: 'Sport Duffel',
          harga: 'Rp. 1.300.000'
        },
        {
          img: require('../image/produk/6.jpg'),
          nama: 'Unisex Bag',
          harga: '$Rp. 1.300.000'
        },
        {
          img: require('../image/produk/7.jpg'),
          nama: 'Cordura Black',
          harga: 'Rp. 1.300.000'
        },
        {
          img: require('../image/produk/8.jpg'),
          nama: 'Cordura Blue',
          harga: 'Rp. 1.300.000'
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View style={styles.cari}>
             <Image 
             style={styles.srcImage}
             source={require('../image/cari.png')}
          />
          <TextInput
            placeholder='Cari Produk'
            placeholderTextColor='#B2BABB'
            autoCapitalize="none"
            style={styles.inputCari}/>

         </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notif')}>
              <Image 
                style={styles.headerImage}
                source={require('../image/notif.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesan')}>
              <Image 
                style={styles.headerImage}
                source={require('../image/pesan.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Belanja')}>
              <Image 
                style={styles.headerImage}
                source={require('../image/shop.png')}
                />
            </TouchableOpacity>
          </View>
        </View>

        
        <ScrollView style={styles.scroll}>
           <View style={styles.content}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View>
                  <Image 
                   style={styles.footerImage}
                   source={require('../image/discount.png')}
                  />
                  <Text style={styles.footerText}>discount</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View>
                  <Image 
                   style={styles.footerImage}
                   source={require('../image/menu.png')}
                  />
                  <Text style={styles.footerText}>gratis ongkir</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View>
                  <Image 
                   style={styles.footerImage}
                   source={require('../image/dompet.png')}
                  />
                  <Text style={styles.footerText}>promo Rp </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorit')}>
                <View>
                  <Image 
                   style={styles.footerImage}
                   source={require('../image/love.png')}
                  />
                  <Text style={styles.footerText}>Barang Favorit</Text>
                </View>
              </TouchableOpacity>
           </View>

           <View style={styles.banner}>
              <Text style={styles.isiBanner}>
              </Text>
            </View>

            <View>
              <FlatList
                numColumns={2}
                data={this.state.marketlist}
           
                renderItem={obj => (
                  <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga}  />
                  )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

        </ScrollView>


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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Transaksi')}>
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
  };
};

const styles = StyleSheet.create({
 container: {
   flex: 2,
   marginTop: 0,
   backgroundColor:'#ffffff',
  },
    header: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10,
    backgroundColor: '#ffffff',
    height: 60,
  },
  headerText:{
    fontFamily: '',
    color:'black',
    fontSize: 25,
    paddingTop: 7,
    paddingLeft:0
  },
  headerImage:{
    width:20,
    height:20,
    alignSelf:'center',
    margin:10,
    marginTop:20,
  },
  cari: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#B2BABB',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  srcImage:{
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputCari: {
    width: 120,
    height: 50,
    margin: 7,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 14,
    fontWeight: '100',

  },
  scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AEB6BF',
  },
  content:{
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    justifyContent:'space-between',
    marginTop:10,
    alignItems:'center',
    backgroundColor: '#ffffff',
    height: 70,
  },
  isiContent:{
    color:'black',
    margin:5
  },
  banner:{
    flexWrap:'wrap',
    flexDirection:'column',
    backgroundColor: '#F2F3F4',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    padding:0,
    width:350,
    height: 130,
  },
  isiBanner:{
    color:'black',
    fontSize: 30,
    margin:100,
    fontWeight: '100'
  },
  product:{
     // flexDirection:'row',
    // flexWrap:'wrap',
    marginTop: 10,
    backgroundColor: '#A3E4D7',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    height: 500,

  },
  isiProduct:{
    color:'black',
    fontSize: 70,
    margin:50,
    fontWeight: '100'
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
  },
  iconcart:{
    height: 25,
    width: 25, 
  },
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
//  jdul: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     textDecorationLine: 'bold',
//     textAlign: 'center',
//   },
  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 100,
    height: 100,
  }

});
      