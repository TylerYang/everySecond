import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tabTo, push } from '../actions';
import Tabs from '../components/tabs';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPressTab: (tab) => {
      dispatch(tabTo(tab));
    },
    onPressAddMoment: () => {
      dispatch(push({name: 'AddMoment'}));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTab: state.navigation.selectedTab
  };
};

const TabsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Tabs);

export default TabsContainer;