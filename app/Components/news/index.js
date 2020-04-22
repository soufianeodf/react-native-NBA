import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getNews} from '../../Store/actions/newsActions';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getNews());
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

function mapStateToProps(state) {
  console.log(state);
  return {
    News: state.News,
  };
}

export default connect(mapStateToProps)(NewsComponent);
