import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, id, startModalHandler }) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => startModalHandler(item, id)}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },

  goalItemText: {
    color: "#000",
  },
});

export default GoalItem;
