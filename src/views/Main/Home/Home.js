import React, { PropTypes as T } from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import { Link } from 'react-router'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/home')
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>This app demonstrates how to add authentication to a React app. More specifically, it covers how to:</p>
        <ul>
          <li>Add a login/signup area which returns a <a href="https://jwt.io/introduction">JSON Web Token</a> that is saved in <code>localStorage</code></li>
          <li>Conditionally hide and show various parts of the application depending on the user's authentication state</li>
          <li>Create a profile area which displays user information from the payload of the JWT</li>
          <li>Protect client-side routes with the <code>onEnter</code> route event</li>
          <li>Make requests for server resources protected by JWT middleware on the server</li>
          <li>Make requests for server resources that require a specific <code>scope</code> to be present in the JWT payload</li>
        </ul>
        { !isAuthenticated() && 
          <Link to={'/login'}> 
            <Button bsStyle="primary" bsSize="large">Log In</Button>
          </Link>
        }
        { isAuthenticated() &&
          <Button bsStyle="primary" bsSize="large" onClick={this.logout.bind(this)}>Log Out</Button>          
        }
      </Jumbotron>
    )
  }
}

export default Home
