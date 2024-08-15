import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import { ScrollView } from "react-native-gesture-handler";

const TaskItem = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingTaskId, setEdiingTask] = useState(null);

  // Get Data From Server
  useEffect(() => {
    const getDataFromServer = async () => {
      try {
        const response = await api.get("/tasks");
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {}
    };

    getDataFromServer();
  }, []);

  const onTitleChange = (txt) => {
    setTitle(txt);
  };

  const handleEditTask = async () => {
    if (!title) {
      Alert.alert("Error", "Please enter valid data");
      return;
    }

    try {
      const updatedTask = { title };
      const response = await api.put(`/tasks/${editingTaskId}`, updatedTask);
      setTasks(
        tasks.map((task) => (task.id === editingTaskId ? response.data : task))
      );
      Alert.alert("Success", "Task updated successfully");
      setTitle("");
      setEdiingTask(null);
    } catch (error) {
      Alert.alert("Error", "Failed to update task");
    }
  };

  const handleTask = async () => {
    if (!title) {
      Alert.alert("Error", "Title is required");
      return;
    }

    try {
      const newTask = { title };
      const response = await api.post("/tasks", newTask);
      setTasks([...tasks, response.data]);
      Alert.alert("Success", "Task added successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to add task");
    }
  };

  const startEditing = (item) => {
    setTitle(item.title);
    setEdiingTask(item.id);
  };

  const onDelteItem = async (x) => {
    try {
      await api.delete(`/tasks/${x}`);
      setTasks(tasks.filter(task => task.id !== x));
      Alert.alert("Success", "Task deleted successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to delete task");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>{item.title}</Text>
      <Button title="Edit" onPress={() => startEditing(item)} />
      <Button title="Delete" onPress={() => onDelteItem(item.id)} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Task"
        value={title}
        onChangeText={onTitleChange}
        style={styles.title}
      />
      <Button
        title={editingTaskId ? "Edit Task" : "Add Task"}
        onPress={editingTaskId ? handleEditTask : handleTask}
      />
      <ScrollView>
        <FlatList
          data={tasks}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          } // Fallback for undefined IDs
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    margin: 10,
    backgroundColor: "#fff",
  },
  btn: {
    width: 40,
  },
  item: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
