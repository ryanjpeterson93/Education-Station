import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/old-form'>
            <Menu.Item
              id='oposts'
              name='Old Posts'
              active={location.pathname === '/old-form'}
            />
          </Link>
          <Link to='/young-form'>
            <Menu.Item
              id='yposts'
              name='Young Posts'
              active={location.pathname === '/young-form'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu secondary>
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
              name='young'
              id='young'
              active={this.props.location.pathname === '/young'}
            />
          </Link>
          <Link to='/old'>
            <Menu.Item
              name='old'
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
        {/* <Menu.Item position='right' header>Miss Beth's Summer Fun Kits</Menu.Item> */}
          {/* {this.rightNavItems()} */}
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);