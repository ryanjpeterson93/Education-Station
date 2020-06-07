import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import axios from 'axios';

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
      <div className="postDiv" key={ypost.id}>
        <Grid >
          <Grid.Row>
            <Grid.Column>
              <h2>{ypost.title}</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched>
            <Grid.Column width={8}>
              <img className="postImage" src={ypost.photo} alt="No Image Right Now" />
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="postBody">
                <p> {ypost.body} </p>

              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <div className="postVideo">
                <iframe 
                src= {ypost.video} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="postHeader">
          <Header as="h3" textAlign="center">Here are some post and stuff</Header>
        </div>
        <div className="postBody">
          {this.renderPosts()}
        </div>
      </>



    )
  }

}

export default Young;