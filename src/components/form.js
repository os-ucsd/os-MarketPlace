import React from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import '../css/form.css';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          projectName: "",
          link: "",
          description: "",
          technology: "",
          database: "",
          submit: false
        };
    }

    render(){
        return(
            <div>
            <div className="form">
<Form>
  <Form.Group as={Row} controlId="name">
      <Form.Label column sm="2">Name</Form.Label>
      <Col sm="10">
          <Form.Control required type="name" placeholder="Your name" />
      </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="project">
      <Form.Label column sm="2">Project's Name </Form.Label>
      <Col sm="10">
          <Form.Control
              required
              type="projectName"
              placeholder="Name of the project"
            />
      </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="repo">
      <Form.Label column sm="2">Repositories Link</Form.Label>
      <Col sm="10">
          <Form.Control
              required
              type="link"
              placeholder="Link to the project's repository"
            />
      </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="description">
      <Form.Label column sm="2"> Project Description </Form.Label>
      <Col sm="10">
          <Form.Control
              required
              type="description"
              placeholder="Short description of the project"
            />
      </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="framework">
      <Form.Label column sm="2"> Languages or Frameworks </Form.Label>
      <Col sm="10">
          <Form.Control
              required
              type="technology"
              placeholder="What languages or frameworks does the project use?"
            />
      </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="Database">
      <Form.Label column sm="2"> Database </Form.Label>
      <Col sm="10">
          <Form.Control
              type="database"
              placeholder="What kind of database does the project use? Put N/A otherwise"
            />
      </Col>
  </Form.Group>
  <div className="button">
      <Button variant="primary">Submit Project</Button>
  </div>

</Form>
</div>
            </div>
        )
    }
}

export default Forms;
