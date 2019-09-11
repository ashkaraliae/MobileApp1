import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
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
