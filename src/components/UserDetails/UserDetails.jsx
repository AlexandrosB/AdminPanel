import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./Static/userDetails.scss');

class UserDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        updateUserDetails: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        const {
            name, email, phone, address, company
        } = this.props;
        this.state = {
            name,
            email,
            phone,
            address,
            company
        };
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if (oldProps.id !== newProps.id) {
            this.setState({
                name: newProps.name,
                email: newProps.email,
                phone: newProps.phone,
                address: newProps.address,
                company: newProps.company
            });
        }
    }

    /**
     * Change the value of
     * the selected field
     * @param event
     * @param type
     */
    updateFields = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    };

    /**
     * Cancel all the changes
     * and restore the original
     * values
     */
    cancelChanges = () => {
        const {
            name, email, phone, address, company
        } = this.props;
        this.setState({
            name,
            email,
            phone,
            address,
            company
        });
    };

    /**
     * Update user info with
     * the new values
     */
    updateUserDetails = () => {
        const {
                name, email, phone, address, company
            } = this.state,
            { updateUserDetails, id, photo } = this.props,
            data = {
                id,
                photo,
                name,
                company,
                email,
                phone,
                address
            };
        updateUserDetails(data);
    };

    render() {
        const {
                name, email, phone, address, company
            } = this.state,
            {
                name: oldName, email: oldEmail, phone: oldPhone, address: oldAddress, company: oldCompany
            } = this.props,
            enableButton = (name !== oldName || email !== oldEmail
                || phone !== oldPhone || address !== oldAddress
                || company !== oldCompany);
        return (
            <section className='userDetailsContainer'>
                <div className='formGroup'>
                    <div className='formElement'>
                        <span className='label'>Name</span>
                        <input
                            type='text'
                            value={ name }
                            placeholder='Enter name'
                            onChange={ (e) => this.updateFields(e, 'name') }
                        />
                    </div>
                    <div className='formElement'>
                        <span className='label'>Email address</span>
                        <input
                            type='text'
                            value={ email }
                            placeholder='Enter email address'
                            onChange={ (e) => this.updateFields(e, 'email') }
                        />
                    </div>
                    <div className='formElement'>
                        <span className='label'>Phone</span>
                        <input
                            type='text'
                            value={ phone }
                            placeholder='Enter phone'
                            onChange={ (e) => this.updateFields(e, 'phone') }
                        />
                    </div>
                    <div className='formElement'>
                        <span className='label'>Address</span>
                        <input
                            type='text'
                            value={ address }
                            placeholder='Enter address'
                            onChange={ (e) => this.updateFields(e, 'address') }
                        />
                    </div>
                    <div className='formElement'>
                        <span className='label'>Company</span>
                        <input
                            type='text'
                            value={ company }
                            placeholder='Enter company'
                            onChange={ (e) => this.updateFields(e, 'company') }
                        />
                    </div>
                    <section className='buttons'>
                        <button
                            className='cancel'
                            onClick={ this.cancelChanges }
                            disabled={ !enableButton }
                        >
                            <p>Cancel</p>
                        </button>
                        <button
                            className='update'
                            onClick={ this.updateUserDetails }
                            disabled={ !enableButton }
                        >
                            <p>Save</p>
                        </button>
                    </section>
                </div>
            </section>
        );
    }
}

export default UserDetails;
