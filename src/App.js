import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";
import ItemModal from "./components/itemModal";
import { getRandomNumberInRange } from "./utils";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const addGoalOnPressHandler = (inputValue) => {
    if (!inputValue) return;

    setGoalsList((prev) => [
      ...prev,
      { value: inputValue, id: getRandomNumberInRange(1, 9999999) },
    ]);
  };

  const deleteGoalHandler = (id) => {
    if (!id) return;
    setGoalsList((prev) => prev.filter((goal) => goal.id !== id));
    setShowModal(false);
  };

  const modalToggle = () => {
    setShowModal((prev) => !prev);
  };

  const startModalHandler = (value, id) => {
    if (!value && !id) return;
    const selected = goalsList.find(
      (goal) => goal.id === id && goal.value === value
    );

    selected && setSelectedGoal(selected);
    modalToggle();
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalOnPressHandler={addGoalOnPressHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={({ item }) => (
            <GoalItem
              item={item.value}
              id={item.id}
              startModalHandler={startModalHandler}
            />
          )}
          keyExtractor={({ id }) => id}
          alwaysBounceVertical={false}
        />
        {showModal && (
          <ItemModal
            selectedGoal={selectedGoal}
            closeModal={modalToggle}
            setGoalsList={setGoalsList}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#5e0acc",
  },

  goalsContainer: {
    flex: 5,
    paddingBottom: 20,
  },
});
