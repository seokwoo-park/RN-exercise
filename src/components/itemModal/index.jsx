import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const ItemModal = ({ selectedGoal, closeModal, setGoalsList }) => {
  console.log(selectedGoal);

  const [inputValue, setInputValue] = useState("");

  const deleteItemHandler = () => {
    setGoalsList((prev) => prev.filter((goal) => goal.id !== selectedGoal.id));
    closeModal();
  };

  const onTextChangeHandler = (text) => {
    setInputValue(text);
  };

  const editGoalHandler = () => {
    if (!inputValue) return;

    setGoalsList((prev) =>
      prev.map((goal) => {
        if (goal.id !== selectedGoal.id) return goal;
        return { ...goal, value: inputValue };
      })
    );

    closeModal();
  };

  return (
    <Modal animationType="fade">
      <View style={styles.modalBox}>
        <TextInput
          placeholder="Write the goal.."
          onChangeText={onTextChangeHandler}
          defaultValue={selectedGoal.value}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Edit" onPress={editGoalHandler} />
          <Button title="Delete" color="red" onPress={deleteItemHandler} />
          <Button title="Cancel" color="grey" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    backgroundColor: "#ccc",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default ItemModal;
