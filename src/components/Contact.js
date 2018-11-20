import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  };
  render() {
    const { name, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.number.isRequired
// };
export default Contact;
