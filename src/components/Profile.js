import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile() {

  return(
    <View style={styles.container}>
      <Text>
        PROFILE GOES HERE.
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});