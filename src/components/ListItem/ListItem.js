import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const listItem = props => (
  <TouchableOpacity>
    <View>
      <Image resizeMode='cover' style={styles.placeImage} source={props.placeImage} />
      <Text style={styles.listItem} onPress={props.onItemPressed}>
        {props.placeName}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 100,
    width: 100,
  },
});

export default listItem;
