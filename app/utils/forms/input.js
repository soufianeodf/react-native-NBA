import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = props => {
  let template = null;

  switch (props.type) {
    case 'textinput':
      template = (
        <TextInput {...props} style={[styles.input, props.overrideStyle]} />
      );
      break;
    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    fontSize: 16,
    padding: 5,
    marginTop: 10,
  },
});

export default Input;
