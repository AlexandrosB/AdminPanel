import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListSingleUser from './Static/UserListSingleUser';

require('./Static/userList.scss');

class UserList extends Component {
    render() {
        const { users, selectUser, selectedUserId } = this.props;
        return (
            <ul className='userListContainer'>
                {
                    users.map((user) => (
                        <UserListSingleUser
                            key={ user.id }
                            userId={ user.id }
                            userPhoto={ user.photo }
                            userName={ user.name }
                            userEmail={ user.email }
                            selectUser={ selectUser }
                            selectedUserId={ selectedUserId }
                        />
                    ))
                }
            </ul>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    selectUser: PropTypes.func.isRequired,
    selectedUserId: PropTypes.string.isRequired
};

export default UserList;
