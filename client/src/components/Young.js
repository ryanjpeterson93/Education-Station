import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Accordion, Jumbotron } from 'react-bootstrap'

class Young extends React.Component {
  state = { yposts: [] };

  componentDidMount() {
    axios.get('/api/yposts')
      .then(res => this.setState({ yposts: res.data, })
      )
  }

  renderPosts = () => {
    const { yposts } = this.state
    return yposts.map(ypost =>
      <>
        <div className="postCard">
          <Col>
            <Card key={ypost.id}>
              <Card.Img src={ypost.photo} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Footer>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
              </Card.Footer>
              </Card.ImgOverlay>
            </Card>
            <Accordion>
              {/* <Card> */}
              <Accordion.Toggle as={Card.Header} eventKey="0">
                View Video
                    </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <iframe
                    src={ypost.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </Card.Body>
              </Accordion.Collapse>
              {/* </Card> */}
            </Accordion>
          </Col>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
          <Jumbotron fluid>
            <Container>
              <h1>3 - 5 Year Olds</h1>
              <p>
                Check out all of these posts about all the cool kits that I make for the younger kiddos!
              </p>
            </Container>
          </Jumbotron>
        <Container fluid>
          <Row xs={1} sm={1} md={2} lg={3} xl={4}>
            {this.renderPosts()}
          </Row>
        </Container>
      </>
    )
  }
}

export default Young;