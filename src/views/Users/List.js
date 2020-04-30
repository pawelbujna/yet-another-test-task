import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersApi from './../../api/usersApi';
import Pagination from '././../../components/Pagination'
import Loader from './../../components/Loader';
import RouterLink from './../../components/core/RouterLink'

import { setUsers as setUsersAction } from './../../store/actions'

class List extends Component {
  state = {
    users: [],
    currentPage: 1,
    usersPerPage: 2,
    pagesAmount: 0
  }

  componentDidMount() {
    this.getUsers(this.state.currentPage);
  }

  async getUsers(pageNumber) {
    this.setState({
      isLoading: true
    })

    const result = await usersApi.get(pageNumber, this.state.usersPerPage);
    this.props.setUsers(result.data);

    this.setState({
      isLoading: false,
      pagesAmount: result.pagesAmount
    })
  }

  render() {
    const { users } = this.props
    const { currentPage, isLoading, pagesAmount } = this.state

    const changePage = (pageNumber) => {
      this.getUsers(pageNumber)
    }

    return (
      <Loader isLoading={isLoading}>
        <div>
          <div className="headers">
            <div>Name</div>
            <div>Description</div>
            <div>Price</div>
            <div>Category</div>
          </div>
          {users.map((user, index) => {
            return <div className="list" key={index}>
              <div>{user.id}</div>
              <div>{user.firstname}</div>
              <div>{user.lastname}</div>
              <div>{user.avatarUrl}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.phone}</div>
              <RouterLink path="edit" label="Edit" />
            </div>
          })}
        </div>

        <Pagination
          currentPage={currentPage}
          pagesAmount={pagesAmount}
          changePage={changePage} />
      </Loader>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUsers: users => { dispatch(setUsersAction(users)) }
});

const mapStateToProps = state => {
  const { users } = state
  return { users };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
