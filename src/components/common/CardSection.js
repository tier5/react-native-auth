import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => (
  <View style={styles.cardSectionStyle}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  cardSectionStyle: {
    borderWidth: 0,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
