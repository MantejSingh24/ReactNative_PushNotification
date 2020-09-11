import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,

      requestPermissions: true,
    });
  }

  sendMessage = () => {
    PushNotification.localNotification({
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };
  render() {
    return (
      <View>
        <Text> App </Text>
        <Button
          title={'clicke here to send message'}
          onPress={() => this.sendMessage()}></Button>
      </View>
    );
  }
}
