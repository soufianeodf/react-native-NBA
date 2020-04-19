import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the news component.</Text>
      </View>
    );
  }
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsComponent;
