import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import UserListSingleUser from '../src/components/UserList/Static/UserListSingleUser';

describe('<UserListSingleUser />', () => {
    const mockFnCb = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserListSingleUser
            userId='dasdasdadas'
            userPhoto='random.url..com'
            userName='Me'
            userEmail='mymonkey@email.com'
            selectUser={ mockFnCb }
            selectedUserId='qwertytrewq'
        />);
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        wrapper;
    });

    it('renders a list list item', () => {
        expect(wrapper.find('li.singleUser').exists()).toBe(true);
    });

    it('check the type of props', () => {
        const props = {
                userId: 'dasdasdadas',
                userPhoto: 'random.url.com',
                userName: 'Me',
                userEmail: 'mymonkey@email.com',
                selectedUserId: 'qwertytrewq'
            },
            mountWrap = mount(<UserListSingleUser { ...props } />);
        expect(mountWrap.prop('userId')).toBeString();
        expect(mountWrap.prop('userPhoto')).toBeString();
        expect(mountWrap.prop('userName')).toBeString();
        expect(mountWrap.prop('userEmail')).toBeString();
        expect(mountWrap.prop('selectedUserId')).toBeString();
    });
});
