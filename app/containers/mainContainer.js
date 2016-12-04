import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/app';

const MainContainer = connect()(App);

export default MainContainer;