import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const formData = {
        ...prevState.formData,
        [name]: value
      };
      return { formData };
    }, this.validateForm);
  };

  async onClick(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state.formData;

    await axios
      .post("/api/form", {
        name,
        email,
        message,
        subject
      })
      .then(console.log(name));
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <fieldset>
            <Container className="banner-text2">
              <h3 style={{ textAlign: "center" }}>Contact Me:</h3>
              <Row className="show-grid">
                <Col xs={6} md={12}>
                  <section>
                    <label>Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.formData.name}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={12}>
                  <section>
                    <label>email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.formData.email}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={12}>
                  <section>
                    <label>Subject:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      id="subject"
                      value={this.state.formData.subject}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={12}>
                  <section>
                    <label>Message:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="message"
                      id="mesmessages"
                      value={this.state.formData.message}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col className="button">
                  <Button
                    variant="outline-secondary "
                    className="button"
                    onClick={this.onClick}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactMe;
