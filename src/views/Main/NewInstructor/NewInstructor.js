import React, { PropTypes as T } from 'react'
import {Panel, Col, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import styles from './styles.module.css'
import jwtDecode from 'jwt-decode'
import md5 from 'md5'

import { API_URL } from './../../../utils/constants'

export class NewInstructor extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      error: ''
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onNewInstructorSubmit() {
    const { first_name, last_name, email, company } = this.state
    const data = { first_name, last_name, email, company }
    this.props.auth.fetch(`${API_URL}/instructors`, { 
      method: 'POST', 
      body: JSON.stringify(data)
    }).then(result => {
      if (result.error) {
        this.setState({ error: result })
        return
      }
      this.context.router.push('/instructor')
    })
  }

  render() {
    return (
      <Col sm={6} smOffset={3}>
        <FormGroup controlId="first_name">
          <ControlLabel>First Name</ControlLabel>
          <FormControl 
            type="text"
            placeholder="First name" 
            name="first_name"
            value={this.state.first_name} 
            onChange={this.handleChange.bind(this)}
            required
          />
        </FormGroup>
        <FormGroup controlId="first_name">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl 
            type="text"
            placeholder="Last name" 
            name="last_name"
            value={this.state.last_name} 
            onChange={this.handleChange.bind(this)}
            required
          />
        </FormGroup>
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl 
            type="text"
            placeholder="Email address" 
            name="email"
            value={this.state.email} 
            onChange={this.handleChange.bind(this)}
            required
          />
        </FormGroup>
        <FormGroup controlId="company">
          <ControlLabel>Company</ControlLabel>
          <FormControl 
            type="text"
            placeholder="Company Name" 
            name="company"
            value={this.state.company} 
            onChange={this.handleChange.bind(this)}
            required
          />
        </FormGroup>
        { this.state.error && 
          <Alert bsStyle="danger">{this.state.error.message}</Alert>
        }
        <Button bsStyle="primary" onClick={this.onNewInstructorSubmit.bind(this)}>Submit</Button>
      </Col>
    )
  }
}

export default NewInstructor
