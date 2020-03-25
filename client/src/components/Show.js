import React, { Component } from "react";
import axios from "axios";

const Show = props => (
  <tr>
    <td>{props.contacts.name}</td>
    <td>{props.contacts.number}</td>
  </tr>
);

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = { contacts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/contact/")
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  contactList() {
    return this.state.contacts.map(current => {
      return <Show contacts={current} key={current._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>{this.contactList()}</tbody>
        </table>
      </div>
    );
  }
}
