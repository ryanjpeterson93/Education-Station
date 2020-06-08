import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const AboutKits = () => (
  <>
    <Jumbotron>
      <h1>
        What are these kits?
      </h1>
      <p>
        Here is a little bit about them and how they got started!
      </p>
    </Jumbotron>
    <Container>
      <h2>
        Creativity Kits
      </h2>
      <p>
        I’m so excited to offer these Creativity Kits to all of you!!
        Let me tell you a little bit about them!
        My desire was to design an outlet for kids own personal creativity! Something simple enough for children to do on their own without a lot of parental help! (Hopefully this can give parents a little break and the kids a productive creativity experience!!)
      </p>
      <h2>
        More About The Kits
      </h2>
      <p>
        There will be a fun new theme each week!! All the projects in the kit will center around that weekly theme!
        The kits are created with two different age groups in mind! The younger kit is for children ages 3-5! While the older kit is more appropriate for children ages 5-8+ years of age!
        Each kit contains everything you will need to complete each project, ie. wood, paper, Pom-poms, goggley eyes, and even the paint and paintbrush that might be needed!! All you need to have readily available at your home are  scissors, glue and or tape when needed!!
        I provide a picture, that is an easy to follow example of each craft project the way I created it for me!! This is very important to note that the children may follow my example or , better yet, use their own imagination and creativity to make each project their own!! Kids are truly amazing in the ideas they have and the things they create!! Just let them fly and they will amaze you!!
      </p>
      <h2>
        Wrapping It Up
      </h2>
      <p>
        Please feel free to take a look at each kit and what is provided with each one!!
        I will also have short tutorials on each new weekly kit along with game changing little tips and pointers that will make this experience so much more fun and enjoyable!!
      </p>
      <h3>
        Any Questions?
      </h3>
      <p>
        Please feel free to get a hold of me <Link to= "/contact">here</Link>, and I will get back to you as soon as a can!
      </p>
    </Container>
  </>
)

export default AboutKits;