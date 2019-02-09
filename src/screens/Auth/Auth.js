import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

import backgroundImage from '../../assets/background.jpg'

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs()
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground
            onPress={() => alert('hey there!')}
            color='#29aaf4'
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder='your email address'
              style={styles.input}
            />
            <DefaultInput placeholder='password' style={styles.input} />
            <DefaultInput placeholder='confirm password' style={styles.input} />
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color='#29aaf4'>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: { width: '100%', flex: 1 },
  input: { backgroundColor: '#eee', borderColor: '#bbb' },
  inputContainer: { width: '80%' }
})

export default AuthScreen
