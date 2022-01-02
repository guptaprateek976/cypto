import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, View} from 'react-native';

const normalizeMarketCap = (amount: number) => {
  if (amount > 1_000_000_000_000)
    return `${Math.floor(amount / 1_000_000_000_000)} T`;
  else if (amount > 1_000_000_000)
    return `${Math.floor(amount / 1_000_000_000)} B`;
  else if (amount > 1_000_000) return `${Math.floor(amount / 1_000_000)} M`;
  else if (amount > 1000) return `${Math.floor(amount / 1_000)} K`;
};
const percentageColor = (percentage: number) => {
  return percentage > 0 ? '#16c784' : '#ea3943';
};

type Props = {
  marketCoin: {
    name: string;
    current_price: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    symbol: string;
    market_cap: number;
    image: string;
    [x: string]: any;
  };
};
const CoinItem = ({marketCoin}: Props) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;
  return (
    <View style={styles.detailsConatiner}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.icon}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <Icon
            name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'}
            size={12}
            color={percentageColor(price_change_percentage_24h)}
            style={styles.directionIcon}
          />
          <Text
            style={[
              styles.text,
              {color: percentageColor(price_change_percentage_24h)},
            ]}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.mcapText}>
          Mcap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282828',
    padding: 15,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    marginRight: 5,
  },
  mcapText: {
    color: '#fff',
  },
  valueContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: 'bold',
    color: '#fff',
  },
  directionIcon: {
    alignSelf: 'center',
    marginRight: 5,
  },
});

export default CoinItem;
