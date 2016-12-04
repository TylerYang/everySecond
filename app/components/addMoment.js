import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/Ionicons';
import Camera from './camera';

class AddMoment extends Component {
  render() {
    const {onClose, onReverseCamera} = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: '记录瞬间', tintColor: 'black' }}
          leftButton={<CloseBtn onPress={onClose} />}
          rightButton={<ReverseBtn onPress={onReverseCamera} />}
          style={{ backgroundColor: 'white', }}
          statusBar={{ tintColor: 'white', }}
          />
        <Camera />
      </View>
    );
  }
}

const CloseBtn = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Icon name='ios-close' size={35} style={styles.leftButton} />
    </View>
  </TouchableOpacity>
);

const ReverseBtn = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Icon name='ios-reverse-camera' size={30} style={styles.rightButton} />
    </View>
  </TouchableOpacity>
);


export default AddMoment;

const styles = StyleSheet.create({
  leftButton: {
    marginTop: 4,
    marginLeft: 14,
  },
  rightButton: {
    marginTop: 8,
    marginRight: 14,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});