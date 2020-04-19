import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LogoImage from '../../assets/images/nba_login_logo.png';

const LogoComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} resizeMode={'center'} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 150,
  },
  container: {
    alignItems: 'center',
  },
});

export default LogoComponent;
