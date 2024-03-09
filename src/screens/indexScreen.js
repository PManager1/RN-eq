import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const IndexScreen = () =>{
    return (
        <View style={styles.container}>
          <Text> Hello index Screeen - on your app!</Text>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default IndexScreen;