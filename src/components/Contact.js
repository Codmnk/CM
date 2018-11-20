import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteClickHandler(id);
  };

  render() {
    const { id, name, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            style={{ cursor: "pointer" }}
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
