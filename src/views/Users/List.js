import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pagination from '././../../components/Pagination'
import Loader from './../../components/Loader';
import RouterLink from './../../components/core/RouterLink'
import { getUsers } from './../../store/actions/userActions'

const mapDispatchToProps = dispatch => ({
  getUsers: (currentPage, itemsPerPage) => { dispatch(getUsers(currentPage, itemsPerPage)) }
});

const mapStateToProps = state => {
  return {
    users: state.users.list,
    isLoading: state.loader.isLoading,
    currentPage: state.pagination.currentPage,
    pagesAmount: state.pagination.pagesAmount
  }
};

class List extends Component {
  itemsPerPage = 4;

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.itemsPerPage);
  }

  render() {
    const { users, isLoading, currentPage, pagesAmount } = this.props

    const changePage = (pageNumber) => {
      this.props.getUsers(pageNumber, this.itemsPerPage);
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
              <div>{user.avatarUrl}</div>
              <div>{user.id}</div>
              <div>{user.firstname}</div>
              <div>{user.lastname}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
