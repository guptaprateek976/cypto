import React from 'react';
import {FlatList} from 'react-native';
import CoinItem from '../../components/CoinItem';
import CryptoCurrencies from '../../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={CryptoCurrencies}
      renderItem={({item}) => <CoinItem marketCoin={item} />}
    />
  );
};

export default HomeScreen;
