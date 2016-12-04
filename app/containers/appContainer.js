import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/app';

const mapStateToProps = state => state.navigation;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;