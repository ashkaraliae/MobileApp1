import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enterdText => {
    setEnteredGoal(enterdText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              icon={<Icon name="arrow-right" size={15} color="white" />}
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add" color="green" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 4,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '45%',
    borderRadius: 20,
    shadowColor: 'black',
  },
});

export default GoalInput;
