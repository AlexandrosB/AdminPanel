import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { USERS } from '../__testData__/testData';

import UserList from '../src/components/UserList/UserList';
import UserListSingleUser from '../src/components/UserList/Static/UserListSingleUser';

describe('<UserList />', () => {
    const mockFnCb = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserList
            users={ USERS }
            selectUser={ mockFnCb }
            selectedUserId={ USERS[0].id }
        />);
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        wrapper;
    });

    it('renders a list that contains child components', () => {
        expect(wrapper.find('ul.userListContainer').exists()).toBe(true);
    });

    it('contains UserListSingleUser component', () => {
        expect(wrapper.find(UserListSingleUser).exists()).toBe(true);
    });
});
