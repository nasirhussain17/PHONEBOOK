import React, { Component } from "react";
import axios from "axios";
import Contacts from "./Show";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: ""
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number
    };
    console.log(contact);
    axios
      .post("http://localhost:3000/contact", contact)
      .then(res => console.log(res.data));
    this.setState({
      name: "",
      number: ""
    });
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ color: "red" }}>Phone Book</h3>

        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-sm col-md-4 offset-4">
              <div className="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  required
                  className="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-md-4 offset-4">
              <div className="form-group">
                <label for="number">Number:</label>
                <input
                  type="text"
                  required
                  className="number"
                  id="number"
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                  minLength="10"
                  maxLength="10"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="ADD" className="btn btn-primary" />
          </div>
        </form>

        <div className="row">
          <div className="col-sm col-md-6 offset-2">
            <Contacts />
          </div>
        </div>
      </div>
    );
  }
}
