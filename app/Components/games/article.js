import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the games article component.</Text>
      </View>
    );
  }
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArticleComponent;
