import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
    paddingLeft: 10
  },
  textStyle: {
    fontSize: 20,
    color: '#000'
  }
});

export { Header };
