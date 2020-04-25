import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView, Button} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {connect} from 'react-redux';
import {autoSignIn} from '../../Store/actions/userActions';

import {getTokens, setTokens} from '../../utils/misc';

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isAuth: false,
    };
  }

  manageState(loading, isAuth) {
    this.setState({
      loading,
      isAuth,
    });
  }

  componentDidMount() {
    const User = this.props.User;

    getTokens((value) => {
      if (value[0][1] === null) {
        this.manageState(false, false);
      } else {
        this.props.dispatch(autoSignIn(value[1][1])).then(() => {
          !User.auth.token ?
          this.manageState(false, false)
          :
          setTokens(User.auth, () => {
            this.manageState(false, true);
          });
        })
      }
    })
  }

  render() {
    const params = this.props.route.params;
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return(
        <ScrollView style={{backgroundColor: '#F0F0F0'}}>
          { this.state.isAuth ? 
            <Video
              controls={true}
              paused={true}
              muted={false}
              source={{uri: params.play}}
              style={{width: '100%', height: 250}}
            />
            :
            <View style={styles.notAuth}>
              <Icon name="md-sad" size={80} color="#d5d5d5" />
              <Text style={styles.notAuthText}>
                We are sorry, you need to be registered/logged to see this game
              </Text>
              <Button
                title="Login / Register"
                onPress={() => this.props.navigation.navigate('SignIn')}
              />
            </View>
          }
        </ScrollView>
      );
    }
  }
} // class

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notAuth: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  notAuthText: {
    fontFamily: 'Roboto-bold',
  },
});

function mapStateToProps(state) {
  return {
    User: state.User,
  };
}

export default connect(mapStateToProps)(ArticleComponent);
