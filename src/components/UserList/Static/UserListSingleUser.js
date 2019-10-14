import React, { memo } from 'react';
import PropTypes from 'prop-types';

const UserListSingleUser = (props) => {
    const {
            userId, userPhoto, userName, userEmail, selectUser, selectedUserId
        } = props,
        singleUserClass = (userId === selectedUserId) ? 'singleUser selected' : 'singleUser';
    return (
        <li className={ singleUserClass } onClick={ () => selectUser(userId) }>
            <span className='singleUserPhoto'>
                <img src={ userPhoto } alt='User' />
            </span>
            <span className='singleUserExtra'>
                <div className='singleUserName'>
                    { userName }
                </div>
                <div className='singleUserEmail'>
                    { userEmail }
                </div>
            </span>
        </li>
    );
};

UserListSingleUser.propTypes = {
    userId: PropTypes.string.isRequired,
    userPhoto: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    selectUser: PropTypes.func.isRequired,
    selectedUserId: PropTypes.string.isRequired
};

export default memo(UserListSingleUser);
