import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap'

class Young extends React.Component {
  state = { yposts: [] };

  componentDidMount() {
    axios.get('/api/yposts')
      .then(res => this.setState({ yposts: res.data, })
      )
  }

  renderPosts = () => {
    const { yposts } = this.state
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return yposts.map(ypost =>
      <div  >
        <Col>
          <Card key={ypost.id}>
            <Card.Img src={ypost.photo} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              
            </Card.ImgOverlay>
            {/* <Card.Body> */}
            <iframe
              src={ypost.video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            {/* </Card.Body> */}
          </Card>

          {/* 
        <Grid >
          <Grid.Row>
            <Grid.Column width={16}>
              <h2>{ypost.title}</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched>
            <Grid.Column width={10}>
              <img className="postImage" src={ypost.photo} alt="No Image Right Now" />
            </Grid.Column>
            <Grid.Column width={6}>
              <div className="postBody">
                <p> {ypost.body} </p>

              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <div className="postVideo">
                <iframe 
                src= {ypost.video} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        </Col>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="postHeader">
          {/* <Header as="h3" textAlign="center">Here are some post and stuff</Header> */}
        </div>
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