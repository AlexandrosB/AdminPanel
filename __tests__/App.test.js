import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { USERS } from '../__testData__/testData';

import App from '../src/App';
import UserList from '../src/components/UserList/UserList';
import UserDetails from '../src/components/UserDetails/UserDetails';

describe('<App />', () => {
    const selectUser = jest.fn(),
        updateUserDetails = jest.fn(),
        wrapper = shallow(<App
            selectUser={ selectUser }
            updateUserDetails={ updateUserDetails }
        />);

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        wrapper;
    });

    it('renders a section that contains child components', () => {
        expect(wrapper.find('section.appContainer').exists()).toBe(true);
    });

    it('contains UserList component', () => {
        expect(wrapper.find(UserList).exists()).toBe(true);
    });

    it('contains UserDetails component', () => {
        const secondaryWrapper = shallow(<App selectedUser={ USERS[0] } />);
        const element = secondaryWrapper.find(UserDetails);
        expect(element).toBeTruthy();
    });

    it('does not contain UserDetails component', () => {
        const secondaryWrapper = shallow(<App selectedUser={ null } />);
        const element = secondaryWrapper.find('div.noUser');
        expect(element).toBeTruthy();
    });

    it('check state values', () => {
        expect(wrapper.state('selectedUser')).toBe(null);
        expect(wrapper.state('users')).toBeArray();
    });
});
