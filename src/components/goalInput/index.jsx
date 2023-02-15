import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalOnPressHandler }) => {
  const [inputValue, setInputValue] = useState(null);

  const inputOnChangeHandler = (text) => {
    setInputValue(text);
  };

  const addButtonHandler = () => {
    addGoalOnPressHandler(inputValue);
    setInputValue(null);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputValue}
        placeholder="Write your goal"
        placeholderTextColor="#ccc"
        onChangeText={inputOnChangeHandler}
      />
      <Button title="Add goal" onPress={addButtonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    color: "#fff",
  },
});

export default GoalInput;
