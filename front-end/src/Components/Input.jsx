/** @format */

import React, { Component } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { createStudent } from "./index.js";
import uniqid from "uniqid";

export class Input extends Component {
  state = {
    student: { name: "", surname: "", email: "", dob: "" },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    alert("post submited");
    await createStudent(this.state.student);
    this.setState({ student: { name: "", surname: "", email: "", dob: "" } });
  };

  updateForm = (e) => {
    let object = { ...this.state.student };
    let currentId = e.currentTarget.id;
    object[currentId] = e.currentTarget.value;
    this.setState({ student: object });
  };
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                value={this.state.student.email}
                placeholder="Enter email"
                onChange={this.updateForm}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Row>
              <Col>
                <Form.Control
                  id="name"
                  value={this.state.student.name}
                  onChange={this.updateForm}
                  placeholder="First name"
                />
              </Col>
              <Col>
                <Form.Control
                  id="surname"
                  value={this.state.student.surname}
                  onChange={this.updateForm}
                  placeholder="Last name"
                />
              </Col>
              <Col>
                <Form.Control
                  id="dob"
                  value={this.state.student.dob}
                  onChange={this.updateForm}
                  placeholder="Date of birth"
                />
              </Col>
            </Row>
            <Button type="submit" className="my-1">
              yeet
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Input;
