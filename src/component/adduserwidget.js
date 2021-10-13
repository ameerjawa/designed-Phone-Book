import React, { Component } from "react";

import "../styles/maincontainer.css";

class AdduserWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name != null ? props.user.name : "",
      phone: props.user.phone != null ? props.user.phone : "",
      address: props.user.address != null ? props.user.address : "",
      email: props.user.email != null ? props.user.email : "",
      more: props.user.descreption != null ? props.user.descreption : "",
    };
  }

  // method that store the data white writing in the input
  Changevalue = (event) => {
    let fieldname = event.target.name;
    let value = event.target.value;
    this.setState({ [fieldname]: value });
  };

  render() {
    return (
      
      <div className="adduserform">
        <form
          id="addnewuser"
          onSubmit={(e) => {
            var newuser = {
              name: this.state.name,
              phone: this.state.phone,
              address: this.state.address,
              email: this.state.email,
              imgSrc:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              text: this.state.descreption,
            };
            if(this.props.user.name === ""){
              this.props.add(newuser, e);
            }else{
              this.props.save(newuser, this.props.user.name);
            }

            
           
          }}
        >
          <h1>{this.props.user.name === "" ? "add " : "edit "} new user </h1>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={this.state.name}
            type="text"
            id="name"
            onChange={(event) => {
              this.Changevalue(event);
            }}
            required
          />
          <label htmlFor="telephone">Telephone</label>
          <input
            name="phone"
            value={this.state.phone}
            onChange={(event) => {
              this.Changevalue(event);
            }}
            type="text"
            id="telephone"
            required
          />
          <label
            htmlFor="address"
          >
            Address
          </label>
          <input
            name="address"
            value={this.state.address}
            onChange={(event) => {
              this.Changevalue(event);
            }}
            type="text"
            id="address"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={(event) => {
              this.Changevalue(event);
            }}
            type="text"
            id="email"
          />
          <label htmlFor="description">More</label>
          <input
            id="description"
            name="descreption"
            value={this.state.text}
            type="text"
            onChange={(event) => this.Changevalue(event)}
          />

          <input
            className="addbutton"
            id="addnewuserbtn"
            type="Submit"
            name="add"
            defaultValue={this.props.user.name === "" ? "Add" : "edit"}
          />

          <input
            className="cancelbutton"
            onClick={() => {
              this.props.setopenorcloseadduserwidget(
                (openorcloseadduserwidget) => !openorcloseadduserwidget
              );
            }}
            id="cancelbtn"
            name="cancel"
            defaultValue="cancel"
          />
        </form>
      </div>
    );
  }
}

export default AdduserWidget;
