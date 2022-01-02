import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

type Props = {
  symbol: string;
  image: string;
  marketCapRank: number;
};
const CoinDetailsHeader = ({symbol, image, marketCapRank}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={'chevron-back-sharp'} size={30} color={'#fff'} />
      <View style={styles.symbolContainer}>
        <Image source={{uri: image}} style={{height: 30, width: 30}} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.tickerRank}>#{marketCapRank}</Text>
        </View>
      </View>
      <EvilIcon name={'user'} size={30} color={'#fff'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  tickerRank: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default CoinDetailsHeader;
