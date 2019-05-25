import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import styled,{css} from "styled-components";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: "#033550", fontSize : 30}}> 돈 두뎃 </Text>
        <Button title="이것인가" type="outline"/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Lee : App,
  Young : App,
  Jun : App
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator)

