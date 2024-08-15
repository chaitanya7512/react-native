import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SPlashScreen from "../screens/SplashScreen";
import api from "../utils/Api";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log(userName, password);

    // Check if userName and password are not empty
    if (!userName || !password.trim()) {
      Alert.alert("Please provide both username and password");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/users", { userName, password });

      // Check if the response contains data
      if (response.data) {
        await AsyncStorage.setItem("user", JSON.stringify(response.data));
        navigation.navigate("TaskItem");
      } else {
        Alert.alert("Login failed. Please try again.");
      }
    } catch (error) {
      Alert.alert(
        "Sorry, enter valid credentials: " + (error.message || error)
      );
    } finally {
      setLoading(false);
    }
  };

  // if(loading) return <SPlashScreen />
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        value={userName}
        placeholder="Enter UserName"
        onChangeText={setUserName}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="Enter Password"
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.registerContainer}>
        <Text>Dont Have an Account ?</Text>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcebf6",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  registerContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
});
