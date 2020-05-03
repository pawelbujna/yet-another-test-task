import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from './Form';
import Loader from '../../components/layout/loader/Loader';

import { saveUser, getUserById } from './../../store/actions/userActions';

const mapDispatchToProps = dispatch => ({
  saveUser: user => { dispatch(saveUser(user)) },
  getUserById: id => { dispatch(getUserById(id)) }
});

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  loading: state.users.loading,
  hasError: state.users.hasError
})

class Edit extends Component {
  handler = (user) => {
    this.props.saveUser(user)
    this.props.history.push('/')
  }

  componentDidMount() {
    this.props.getUserById(this.props.match.params.id)
  }

  render() {
    const { loading, currentUser, hasError } = this.props

    return (
      <Loader isLoading={loading}>
        {hasError ?
          <p>Unable to display content</p> :
          <Form handler={this.handler} user={currentUser} />
        }

      </Loader >
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
