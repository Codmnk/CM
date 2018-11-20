import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      break;
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      break;
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      { id: 1, name: "Premo Bho", email: "premo@email.com", phone: 3665 },
      { id: 2, name: "Shamy  Jo", email: "shamy@email.com", phone: 5470 }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
