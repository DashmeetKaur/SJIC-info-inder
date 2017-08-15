// @flow

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



type RoundedButtonProps = {
  onPress: () => void,
  text?: string,
  children?: string,
  navigator?: Object
}

export default class RoundedButton extends React.Component {
  props: RoundedButtonProps

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'rgba(177, 138, 106, 0.5)',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#482e19',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Avenir',
    fontSize: 10,
    marginHorizontal: 5
  }
});