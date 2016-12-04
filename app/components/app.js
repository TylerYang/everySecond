import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import routeMap from '../route';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={ this.props.initialRoute }
        />
      </View>
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.routeName !== this.props.routeName) {
      const {routeName, routeMethod} = nextProps;
      
      let args;
      if (routeMethod !== 'pop') {
        args = {name: routeName};
      }
      
      this.refs.navigator[routeMethod](args);
    }
  }
  //出场动画
  configureScene(route) {
    const sceneAnimation = routeMap.get(route.name).sceneAnimation;
    return sceneAnimation ? sceneAnimation : Navigator.SceneConfigs.FloatFromRight;
  }
  renderScene(route, navigator) {
    const Component = routeMap.get(route.name).component;
    if (!Component) {
      throw new Error(`未能在route.js找到名为${route.name}的组件`);
    } else {
      return (
        <Component {...route}/>
      );  
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigator: {
    flex: 1,
    backgroundColor: 'white'
  },
});
