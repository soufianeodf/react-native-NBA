import React from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import AuthLogo from './authLogo';
import AuthForm from './authForm';

import {getTokens, setTokens} from '../../utils/misc';

class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  goNext = () => {
    this.props.navigation.navigate('App');
  };

  componentDidMount() {
    getTokens(value => {
      console.log(value);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm goNext={this.goNext} />
          </View>
        </ScrollView>
      );
    }
  }
} // class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d428a',
    padding: 50,
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthComponent;
