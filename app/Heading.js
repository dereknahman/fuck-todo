import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>FUCK</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Heading;
