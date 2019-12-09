import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home_form from './page/Home';
import Notif_nav from './page/Notif';
import Pesan_nav from './page/Pesan';
import Favorit_nav from './page/Favorit';
import Akun_nav from './page/Akun';
import Transaksi_nav from './page/Transaksi';
import Saldo_nav from './page/Saldo';
import Kategori_nav from './page/Kategori';
import Login_nav from './page/Login';
import Register_nav from './page/Register';
import Beranda_nav from './page/Beranda';



const page = createStackNavigator({
  Home: Home_form,
  Notif: Notif_nav,
  Pesan: Pesan_nav,
  Favorit: Favorit_nav,
  Akun: Akun_nav,
  Transaksi: Transaksi_nav,
  Saldo: Saldo_nav,
  Kategori: Kategori_nav,
  Login: Login_nav,
  Register: Register_nav,
  Beranda: Beranda_nav,

 
},
{
  headerMode : 'none' 
});

export default createAppContainer(page);