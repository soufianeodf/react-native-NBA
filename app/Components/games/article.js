import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView, Button} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isAuth: false,
    };
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
            <Text>Video</Text>
            :
            <View style={styles.notAuth}>
              <Icon name='md-sad' size={80} color='#d5d5d5' />
              <Text style={styles.notAuthText}>We are sorry, you need to be registered/logged to see this game</Text>
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

export default ArticleComponent;
