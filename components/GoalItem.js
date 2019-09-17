import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableNativeFeedback  onPress={props.onDelete.bind(this,props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 8,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 2,
  },
});
export default GoalItem;
