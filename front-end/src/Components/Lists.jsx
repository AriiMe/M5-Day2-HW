/** @format */

import React, { Component } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { fetchListOfStudents } from "./index.js";
import uniqid from "uniqid";

export class Lists extends Component {
  state = {
    students: [],
  };

  componentDidMount = async () => {
    const students = await fetchListOfStudents();
    this.setState({ students });
    console.log(students);
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.students.length > 0 &&
            this.state.students.map((student) => {
              const { name, surname, email, dob } = student;
              return (
                <Col className="mt-5 mb-5" xs={3} key={uniqid()} id="name-col">
                  <Card.Title className="title">
                    {name} {surname}
                  </Card.Title>
                  <Card.Text id="card-text">{email}</Card.Text>
                  <Card.Text id="card-text">{dob}</Card.Text>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default Lists;
