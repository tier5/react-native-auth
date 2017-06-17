import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
   spinnerStyle: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export { Spinner };
