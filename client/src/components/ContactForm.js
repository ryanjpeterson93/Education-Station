import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import axios from "axios";

class ContactForm extends React.Component {
  defaultValues = {
    name: "",
    body: "",
    phone: "",
    email: "",
  }
  state = {
    ...this.defaultValues
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const contact = { ...this.state }
    axios
      .post("/api/contacts", contact)
      .then((res) => {
        this.props.history.push("/")
        console.log(res);
        this.setState({
          ...this.defaultValues
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name,
      body,
      phone,
      email,
    } = this.state;
    return (
      <>
        <Header as="h3" textAlign="center">Contact Form</Header>
        <div>
          <Form onSubmit={this.handleSubmit} >
            <Form.Field>
              <label>Name</label>
              <input
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <input
                name="phone"
                value={phone}
                placeholder="ex: 801-111-2222"
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Body</label>
              <input
                name="body"
                value={body}
                placeholder="Type out a short message with any questions you may have"
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Email Address</label>
              <input
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm;