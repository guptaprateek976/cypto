import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CoinDetailsHeader from './CoinDetailsHeader';
import CoinName from '../../../assets/data/crypto.json';
import Icon from 'react-native-vector-icons/AntDesign';

const percentageColor = (percentage: number) => {
  return percentage > 0 ? '#16c784' : '#ea3943';
};

const CoinDetailedScreen = () => {
  const {
    image: {small},
    symbol,
    market_data: {market_cap_rank, current_price, price_change_percentage_24h},
    name,
  } = CoinName;
  return (
    <View style={{paddingHorizontal: 10}}>
      <CoinDetailsHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={[
            styles.priceChangeContainer,
            {backgroundColor: percentageColor(price_change_percentage_24h)},
          ]}>
          <Icon
            name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'}
            size={12}
            color={'#fff'}
            style={styles.directionIcon}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 15,
  },
  currentPrice: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  priceChangeContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 3,
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  directionIcon: {
    alignSelf: 'center',
    marginRight: 5,
  },
  priceChange: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default CoinDetailedScreen;
