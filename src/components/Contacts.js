import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      { id: 1, name: "Premo Bho", phone: 3665 },
      { id: 2, name: "Shamy  Jo", phone: 5470 }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
