import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navbarr extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Nav>
          <NavDropdown title="For Mermz" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/submitted-forms">Submitted Forms</NavDropdown.Item>
            <NavDropdown.Item href="/senior-form">Senior Posts</NavDropdown.Item>
            <NavDropdown.Item href="/junior-form">Junior Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => handleLogout(this.props.history)}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/junior">3-5 Years</Nav.Link>
              <Nav.Link href="/senior">5-8+ Years</Nav.Link>
              <Nav.Link href="/kits">Kits Info</Nav.Link>
              <Nav.Link href="/beth">About Beth</Nav.Link>
              {this.rightNavItems()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbarr {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);

{/* <Menu secondary>
          <Link to='/'>
            <Menu.Item
            name='home'
              id='home'
              active={this.props.location.pathname === '/home'}
            >
            </Menu.Item>
          </Link>
          <Link to='/young'>
            <Menu.Item
              name="Juniors"
              id='young'
              active={this.props.location.pathname === '/young'}
            />
          </Link>
          <Link to='/old'>
            <Menu.Item
              name='Seniors'
              id='old'
              active={this.props.location.pathname === '/old'}
            />
          </Link>
          <Link to='/kits'>
            <Menu.Item
              name='kits'
              id='kits'
              active={this.props.location.pathname === '/kits'}
            />
          </Link>
          <Link to='/beth'>
            <Menu.Item
              name='About Beth'
              id='beth'
              active={this.props.location.pathname === '/beth'}
            />
          </Link>
          {/* {this.rightNavItems()} */}
// {/* </Menu> */ } * /}