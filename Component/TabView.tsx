import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import styled,{css} from "styled-components";

class TabView extends React.Component {
    render() {
        return (
            <View >
                <Text style={{color: "#033550", fontSize : 30}}> 돈 두뎃 </Text>
                <Button title="이것인가" type="outline"/>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Lee : TabView,
    Young : TabView,
    Jun : TabView
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createAppContainer(TabNavigator)

