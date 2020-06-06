import React from 'react';
import { Header, Card, Embed, Container, Grid } from 'semantic-ui-react';
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
      // <PostDiv key={ypost.id}>
      //   <p> {ypost.title} </p>
      //   <StyledImg src={ypost.photo}></StyledImg>
      //   <p> {ypost.body} </p>
      // <Embed
      //   url={ypost.video}
      // />
      // </PostDiv>
      <Grid class="postDiv" key={ypost.id}>
        <Grid.Row>
          <Grid.Column>
            <h3>Here Is A Title</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column width={8}>
            <img src={ypost.photo} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Embed
              url={ypost.video}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <p> This can be a pretty cool description about the project. This can be a pretty cool description about the project. This can be a pretty cool description about the project. This can be a pretty cool description about the project. </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }

  render() {
    return (
      <>
        <div>
          {this.renderPosts()}
        </div>
        {/* <div>
          <Grid celled>
            <Grid.Row stretched>
              <Grid.Column width={10}>
                <p>One</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <p>Two</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={10}>
                <p>Three</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>Four</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>Five</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div > */}
      </>



    )
  }

}

export default Young;