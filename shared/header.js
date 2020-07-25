import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Header({ navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>
          APP_NAME
        </Text>
      </View>
      <MaterialIcons name='menu' size={22} onPress={openMenu} style={styles.menuIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ED3466"
  },
  headerText: {
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: '#FFF'
  },
  menuIcon: {
    position: 'absolute',
    right: 16
  }
});