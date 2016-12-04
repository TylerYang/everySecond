import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Moment from './moment';
import Montage from './montage';
import Album from './album';
import Setting from './setting';


const Tabs = ({selectedTab, onPressTab, onPressAddMoment}) => (
  <TabBarIOS>
    {
      tabItems.map((item, idx) => {
        let config = Object.assign({
          selected: selectedTab === item.tabName,
          selectedIconName: item.iconName + '-outline',
          onPress: () => { onPressTab(item.tabName); },
        }, item);
        if (item.isAddMoment === true) {
          config.onPress = onPressAddMoment;
        }
        const Component = item.component;
        return (
          <Icon.TabBarItem {...config} key={idx}>
            <Component {...this.props} />
          </Icon.TabBarItem>
        );
      })
    }
  </TabBarIOS>
);
export default Tabs;

const tabItems = [
  {
    tabName: 'moment',
    title: '瞬间',
    iconName: 'ios-calendar',
    component: Moment
  }, {
    tabName: 'montage',
    title: '合辑',
    iconName: 'ios-albums',
    component: Montage 
  }, {
    tabName: '_hidden',
    iconName: 'ios-add',
    iconSize: 60,
    iconColor: '#ffffff',
    component: Moment,
    isAddMoment: true
  }, {
    tabName: 'album',
    title: '影册',
    iconName: 'ios-photos',
    component: Album
  },{
    tabname: 'setting',
    title: '设置',
    iconName: 'ios-settings',
    component: Setting 
  },
];

const styles = StyleSheet.create({
  tabContent: {
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

