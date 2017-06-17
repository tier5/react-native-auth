import React from 'react';
import ReactNative, { StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <ReactNative.Button
        title={title}
        onPress={onPress}
        style={textStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent'
  }
});

export { Button };
