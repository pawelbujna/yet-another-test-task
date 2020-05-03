import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pagination from '../../components/layout/pagination/Pagination';
import Loader from '../../components/layout/loader/Loader';
import RouterLink from '../../components/core/Routerlink/RouterLink';
import Button from './../../components/core/Button/Button'

import { getUsers, deleteUser } from './../../store/actions/userActions';

import './List.css';

const mapDispatchToProps = dispatch => ({
  getUsers: (currentPage, itemsPerPage) => { dispatch(getUsers(currentPage, itemsPerPage)) },
  deleteUser: id => { dispatch(deleteUser(id)) }
});

const mapStateToProps = state => {
  return {
    users: state.users.list,
    loading: state.users.loading,
    hasError: state.users.hasError,
    currentPage: state.users.currentPage,
    pagesAmount: state.users.pagesAmount
  }
};

class List extends Component {
  itemsPerPage = 4;

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.itemsPerPage);
  }

  render() {
    const { users, loading, hasError, currentPage, pagesAmount } = this.props

    const changePage = (pageNumber) => {
      this.props.getUsers(pageNumber, this.itemsPerPage);
    }

    const deteleUser = id => {
      this.props.deleteUser(id)
    }

    const renderUserBids = bids => {
      if (bids.length === 0) {
        return ''
      }

      return <div className="bids-row">
        <p className="bids-title">Bids:</p>
        {bids
          .sort((a, b) => b.created - a.created)
          .map((bid, index) => {
            return <div key={index}>
              <p>{bid.carTitle}, {bid.created}, {bid.amount}</p>
            </div>
          })}
      </div>
    }

    const renderUsersList = users => {
      return users.map((user, index) => {
        return <div className="card" key={index}>
          <div className="avatar-column">
            <img src={user.avatarUrl} alt="avatar" />
          </div>
          <div className="user-data-column">
            <h1>{user.firstname} {user.lastname}</h1>
            <p>{user.phone}, {user.email}</p>

            {renderUserBids(user.bids)}

            {user.hasPremium ? (
              <div className="premium-badge">
                <i className="left"></i>
                <i className="right"></i>
            PREMIUM
              </div>
            ) : ''}

          </div>
          <div className="action-column">
            <RouterLink path={`edit/${user.id}`} label="Edit" />
            <Button label="Delete" modifier="danger" click={() => { deteleUser(user.id) }} />
          </div>
        </div>
      })
    }

    return (
      <Loader isLoading={loading}>
        {hasError || users.length === 0 ?
          <p>Unable to display content</p> :
          <div>
            {renderUsersList(users)}

            <Pagination
              currentPage={currentPage}
              pagesAmount={pagesAmount}
              changePage={changePage} />
          </div>
        }
      </Loader>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
