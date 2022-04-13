import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Background from '../Components/molecules/Background';

const HomePage: React.FC = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text>dsds</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});
export default HomePage;
