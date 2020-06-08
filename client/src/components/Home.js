import React, { useState } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import logo from '../images/logo.PNG'
import kids1 from '../images/kids1.jpg'
import kids2 from '../images/kids2.jpg'
import kids3 from '../images/kids3.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carDiv">
            <h3>Wow, What a cool title!</h3>
            <h6>Here is some really interesting text and such.</h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Wow, What a cool title!</h3>
          <h6>Here is some really interesting text and such.</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Wow, What a cool title!</h3>
          <h6>Here is some really interesting text and such.</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => (
  <>
    <Jumbotron fluid>
      <Container>
        <h1>This will be the Home Page</h1>
        <p>
          We will totally be able to make it look however you want.
    </p>
      </Container>
    </Jumbotron>

    <div className="carousel">
      {ControlledCarousel()}
    </div>
  </>
)

export default Home;