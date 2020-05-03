import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from './Form';

import { saveUser } from './../../store/actions/userActions';

const mapDispatchToProps = dispatch => ({
  saveUser: (user) => { dispatch(saveUser(user)) }
});

class Add extends Component {
  handler = (user) => {
    this.props.saveUser(user)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Form handler={this.handler} />
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Add));
