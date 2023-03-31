/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';

const isHermes = () => !!global.HermesInternal;

class SdkApp extends Component {
  render() {
    console.log('#### HERMES:' + isHermes());
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          // throw new Error('## SDK click Exception!');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('./assets/example.png')}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: 'blue',
              fontSize: 45,
              position: 'absolute',
              top: 0,
              backgroundColor: 'white',
            }}>
            React SDK
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default SdkApp;
