/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import SignIn from 'js/components/signIn/SignIn';
import * as actions from 'js/actions/actions';

class SignInContainer extends Component {
    render() {
        return (
            <SignIn {...this.props} />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signIn: actions.signIn
    },dispatch);
}

export default connect(null, mapDispatchToProps)(SignInContainer)
