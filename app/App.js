import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>welcome to the home page.</Text>
      </View>
    );
  }
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
