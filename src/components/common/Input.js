import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({ autoCorrect, label, placeholder, onChangeText, secureTextEntry, value }) => {
  const { viewStyle, textStyle, textInputStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {label}
      </Text>
      <TextInput
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={textInputStyle}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    textInputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 4
    }
});

export { Input };
