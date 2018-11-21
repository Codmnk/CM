import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputeGroup from "../layout/TextInputeGroup";

import axios from "axios";

import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: null,
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: 0,
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputeGroup
                    label="Name"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name.."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputeGroup
                    label="Email"
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputeGroup
                    label="Phone"
                    type="number"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
