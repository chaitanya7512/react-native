import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-web'

const SPlashScreen = ({navigation}) => {

  useEffect(()=>{
navigation.replace('Login')
  },[3000])
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff"/>
      <Text style={styles.text}>Welcome To ToDo Task</Text>
    </View>
  )
}

export default SPlashScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5f5f5'
  },
  text:{
    marginTop:10,
    fontSize:24,
  }
})