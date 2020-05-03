import React, { Component } from 'react';

import Input from './../../components/core/Input/Input';
import Checkbox from './../../components/core/Checkbox/Checkbox';
import Submit from './../../components/core/Submit/Submit';
import './Form.css';

class Form extends Component {
  state = {
    submitted: false,
    validations: {
      firstname: false,
      lastname: false,
      avatarUrl: false,
      email: false,
      phone: false,
    },
    user: {
      firstname: '',
      lastname: '',
      avatarUrl: '',
      email: '',
      phone: '',
      hasPremium: false
    }
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: {
          ...this.state.user,
          ...this.props.user
        }
      })
    }
  }

  checkValidations = () => {
    const validationValues = [];
    const validationObject = {}

    for (const key in this.state.user) {
      if (this.state.validations.hasOwnProperty(key)) {
        const value = this.state.user[key] === '';

        validationObject[key] = value

        validationValues.push(value);
      }
    }

    this.setState({
      validations: validationObject
    })

    return !validationValues.includes(true);
  }

  handleInputChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleCheckboxChange = () => {
    this.setState({
      user: {
        ...this.state.user,
        hasPremium: !this.state.user.hasPremium
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      submitted: true
    })

    const isFormValid = this.checkValidations();

    if (isFormValid) {
      this.props.handler(this.state.user);
    }
  }

  render() {
    const { user } = this.state

    return (
      <div className="form-wrapper">

        <p>For best avatars please visit: <a target="_blank" rel="noopener noreferrer" href="https://avatars.dicebear.com">This place</a></p>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleInputChange}
            isValid={this.state.validations.firstname && this.state.submitted}
            value={user.firstname}
            validationMsg="This field is required"
            label="Name"
            name="firstname" />

          <Input
            onChange={this.handleInputChange}
            isValid={this.state.validations.lastname && this.state.submitted}
            value={user.lastname}
            validationMsg="This field is required"
            label="Surname"
            name="lastname" />

          <Input
            onChange={this.handleInputChange}
            isValid={this.state.validations.email && this.state.submitted}
            value={user.email}
            validationMsg="This field is required"
            label="E-mail"
            name="email" />

          <Input
            onChange={this.handleInputChange}
            isValid={this.state.validations.avatarUrl && this.state.submitted}
            value={user.avatarUrl}
            validationMsg="This field is required"
            label="Avatar Link"
            name="avatarUrl" />

          <Input
            onChange={this.handleInputChange}
            isValid={this.state.validations.phone && this.state.submitted}
            value={user.phone}
            validationMsg="This field is required"
            label="Phone number"
            name="phone" />

          <Checkbox
            onChange={this.handleCheckboxChange}
            label="Premium"
            name="premium"
            checked={this.state.user.hasPremium ? 'checked' : ''} />

          <Submit label={user.id ? 'Save' : 'Add'} />
        </form>
      </div>
    )
  };
}

export default Form;
