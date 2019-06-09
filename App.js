/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";
import { strings } from "./Lib/res/strings/strings_en";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <Text>{strings.test}</Text>
        <TextInput
          placeholder={strings.placeholder}
          style={{ height: 40 }}
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{fontSize: 42, padding: 20}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default App;
