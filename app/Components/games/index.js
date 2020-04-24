import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getGames} from '../../Store/actions/gamesActions';
import Moment from 'moment';

class GamesComponenet extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getGames());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the games component.</Text>
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
    Games: state.Games,
  };
}

export default connect(mapStateToProps)(GamesComponenet);
