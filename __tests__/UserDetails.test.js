import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { USERS } from '../__testData__/testData';

import UserDetails from '../src/components/UserDetails/UserDetails';

describe('<UserDetails />', () => {
    const mockFnCb = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserDetails
            id={ USERS[0].id }
            photo={ USERS[0].photo }
            name={ USERS[0].name }
            email={ USERS[0].email }
            phone={ USERS[0].phone }
            address={ USERS[0].address }
            company={ USERS[0].company }
            updateUserDetails={ mockFnCb }
        />);
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        wrapper;
    });

    it('renders a section that contains child components', () => {
        expect(wrapper.find('section.userDetailsContainer').exists()).toBe(true);
    });

    it('check the type of props', () => {
        const testData = USERS[0],
            props = {
                id: testData.id,
                photo: testData.photo,
                name: testData.name,
                email: testData.email,
                phone: testData.phone,
                address: testData.address,
                company: testData.company,
            },
            mountWrap = mount(<UserDetails { ...props } />);
        expect(mountWrap.prop('id')).toBeString();
        expect(mountWrap.prop('photo')).toBeString();
        expect(mountWrap.prop('name')).toBeString();
        expect(mountWrap.prop('email')).toBeString();
        expect(mountWrap.prop('phone')).toBeString();
        expect(mountWrap.prop('address')).toBeString();
        expect(mountWrap.prop('company')).toBeString();
    });
});
