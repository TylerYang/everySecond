import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pop } from '../actions';
import AddMoment from '../components/addMoment';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClose: () => {
            dispatch(pop({name: 'MainContainer'}));
        },
        onReverseCamera: () => console.log('wtf')
    };
}

const AddMomentContainer = connect(
    state => state, mapDispatchToProps
)(AddMoment);

export default AddMomentContainer;