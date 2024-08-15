import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Register = ({navigation}) => {
  const [userName,setUserName] =useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const handleRegister=()=>{

  }

  const handleUserName=(txt)=>{
    setUserName(txt)
  }
  const handlePassword=(txt)=>{
  setPassword(txt)
  }


  const handelConfrimPassword=(txt)=>{
  setConfirmPassword(txt)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TextInput value={userName} placeholder='Enter UserName' onChangeText={handleUserName} style={styles.input} />
    <TextInput value={password} placeholder='Enter Password' onChangeText={handlePassword} style={styles.input} />
<TextInput value={confirmPassword} placeholder='Eneter Confirm Password' onChangeText={handelConfrimPassword} style={styles.input}/>
<Button onPress={handleRegister} title='Register'/>

<View style={styles.loginContainer}>
        <Text>Already Registered  ?</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  )
}

export default Register

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
  loginContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
})