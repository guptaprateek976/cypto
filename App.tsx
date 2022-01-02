import React from 'react';
import {StyleSheet, View} from 'react-native';
import CoinDetailedScreen from './src/screens/CoinDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <View style={styles.container}>
      <CoinDetailedScreen />
      {/* <HomeScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#121212',
  },
});

export default App;
