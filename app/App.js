import React from 'react';
import {View, StyleSheet} from 'react-native';
import Nav from './router';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
