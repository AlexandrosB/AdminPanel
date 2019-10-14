import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListSingleUser from './Static/UserListSingleUser';

require('./Static/userList.scss');

class UserList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        selectUser: PropTypes.func.isRequired,
        selectedUserId: PropTypes.string.isRequired
    };

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

export default UserList;
