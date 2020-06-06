import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import styled from 'styled-components'
import logo from '../images/logo.PNG'

const Home = () => (
  <>
  <Image src={logo}></Image>
  <div id="homepage">
    <Header as="h3" textAlign="center">Education Station</Header>
  </div>
  </>
)

export default Home;