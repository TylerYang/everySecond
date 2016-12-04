import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import RNCamera from 'react-native-camera';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Camera extends Component {
  state = {
    currMillseconds: 0,
  };
  capturing = false;

  componentDidMount() {
    this.renderTimer = setTimeout(() => {
      this.setState({ canRenderCamera: true });
    }, 300);
  }

  componentWillUnmount() {
    clearTimeout(this.renderTimer);
  }

  toggleCapture() {
    if (this.capturing === false) {
      this.startCapture();
    } else {
      this.stopCapture();
    }
    this.capturing = !this.capturing;
  }
  startCapture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
    this.captureTimer = setInterval(() => {
      this.setState({
        currMillseconds: this.state.currMillseconds + 100
      });
      if (this.state.currMillseconds >= this.props.maxMillseconds) {
        clearInterval(this.captureTimer);
        this.stopCapture();
      }
    }, 100);
  }
  stopCapture() {
    this.camera.stopCapture();
    clearInterval(this.captureTimer);
  }
  render () {
    if (this.state.canRenderCamera) {
      const { currMillseconds } = this.state;
      const { maxMillseconds } = this.props;
      return (
        <View>
          <RNCamera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            captureMode={RNCamera.constants.CaptureMode.video}
            aspect={RNCamera.constants.Aspect.fill} />
          <View style={styles.cameraFooter}>
            <RecordBtn onPress={this.toggleCapture.bind(this)} fill={100 * currMillseconds / maxMillseconds}/>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.preview, styles.fakeCamera]}>
        </View>
      )
    }
  }
}
const RecordBtn = ({onPress, fill = 0}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
    <AnimatedCircularProgress
        size={70}
        width={5}
        fill={fill}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
    />
    </View>
  </TouchableOpacity>
);

Camera.defaultProps = {
  maxMillseconds: 3000
};

const styles = StyleSheet.create({
  preview: {
    flex: 3,
    alignItems: 'center',
    height: (Dimensions.get('window').height - 59) * 3 / 4,
    width: Dimensions.get('window').width
  },
  cameraFooter: {
    flex: 1,
    height: (Dimensions.get('window').height - 59) * 1 / 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fakeCamera: {
    backgroundColor: 'black'
  },
  capture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
