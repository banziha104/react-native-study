import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import TabView from "./Component/TabView";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>take this</Text>
        <Text>take this2</Text>
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
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator)
