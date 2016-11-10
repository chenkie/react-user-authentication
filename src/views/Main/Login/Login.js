import React, { PropTypes as T } from 'react'
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'

export class Login extends React.Component {
  constructor(context) {
    super()
    this.state = {
      user: '',
      username: '',
      email: '',
      password: '',
      loginError: '',
      signupError: ''
    }
  }
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  onLoginSubmit(event) {
    event.preventDefault()
    const { user, password } = this.state
    if (user && password) {
      // call the login method from this.props.auth
      // and pass the user and password
      // display any errors if no result.token comes back
    }
  }

  onSignupSubmit(event) {
    event.preventDefault()
    const { username, email, password } = this.state
    if (username && email && password) {
      // call the signup method from this.props.auth
      // and pass the username, email, and password
      // display any errors if no result.token comes back
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { auth } = this.props
    return (
      <Col sm={6} smOffset={3}>
        <Tabs defaultActiveKey={1} id="loginTabs">
          <Tab eventKey={1} title="Log In">
            <form onSubmit={this.onLoginSubmit.bind(this)}>
              <FormGroup controlId="user">
                <ControlLabel>Username/Email</ControlLabel>
                <FormControl 
                  type="text"
                  placeholder="Enter your username or email" 
                  name="user"
                  value={this.state.user} 
                  onChange={this.handleChange.bind(this)}
                />
              </FormGroup>
              <FormGroup controlId="user">
                <ControlLabel>Password</ControlLabel>
                <FormControl 
                  type="password"
                  placeholder="Enter your password" 
                  name="password" 
                  value={this.state.password} 
                  onChange={this.handleChange.bind(this)}
                />
              </FormGroup>

              <Button bsStyle="primary" type="submit">Submit</Button>
              </form>
              { this.state.loginError && 
                <Alert bsStyle="danger">{this.state.loginError}</Alert>
              }
          </Tab>
          <Tab eventKey={2} title="Sign Up">
            <form onSubmit={this.onSignupSubmit.bind(this)}>
              <FormGroup controlId="user">
                <ControlLabel>Username</ControlLabel>
                <FormControl 
                  type="text"
                  placeholder="Enter your username" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange.bind(this)}
                />
              </FormGroup>
              <FormGroup controlId="user">
                <ControlLabel>Email</ControlLabel>
                <FormControl 
                  type="text"
                  placeholder="Enter your email" 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleChange.bind(this)}  
                />
              </FormGroup>
              <FormGroup controlId="user">
                <ControlLabel>Password</ControlLabel>
                <FormControl 
                  type="password"
                  placeholder="Enter your password" 
                  name="password" 
                  value={this.state.password} 
                  onChange={this.handleChange.bind(this)}  
                />
              </FormGroup>
              <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
            { this.state.signupError && 
              <Alert bsStyle="danger">{this.state.signupError}</Alert>
            }
          </Tab>
        </Tabs>
      </Col>
    )
  }
}

export default Login
