import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Accordion, Jumbotron } from 'react-bootstrap'

class Old extends React.Component {
  state = { oposts: [] };

  componentDidMount() {
    axios.get('/api/oposts')
      .then(res => this.setState({ oposts: res.data, })
      )
  }

  renderPosts = () => {
    const { oposts } = this.state
    return oposts.map(opost =>
      <>
        <div className="postCard">
          <Col>
            <Card key={opost.id}>
              <Card.Img src={opost.photo} alt="Card image" />
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
                    src={opost.video}
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
              <h1>5 - 8+ Year Olds</h1>
              <p>
                Check out all of these posts about all the cool kits that I make for the older kiddos!
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

export default Old;