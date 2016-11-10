import React, { PropTypes as T } from 'react'
import {Panel, Col, Button} from 'react-bootstrap'
import styles from './styles.module.css'
import { Link } from 'react-router'
import jwtDecode from 'jwt-decode'
import md5 from 'md5'
import { API_URL } from './../../../utils/constants'

function getInstructorListItem (instructor) {
  const avatarUrl = `https://www.gravatar.com/avatar/${md5(instructor.email).toLowerCase().trim()}s=200`
  return (
    <Panel key={instructor._id}>
      <Col sm={1}>
        <img src={avatarUrl} />
      </Col>
      <Col sm={11}>
        <h3>{ instructor.first_name + ' ' + instructor.last_name }</h3>
        <p><i className="glyphicon glyphicon-envelope"></i> { instructor.email }</p>
        <p><i className="glyphicon glyphicon-briefcase"></i> { instructor.company }</p>
      </Col>
    </Panel>
  )
}

export class Instructor extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      instructors: []
    }
    this.props.auth.fetch(`${API_URL}/instructors`).then(data => this.setState({ instructors: data }))
  }

  onAddInstructorClick() {
    this.context.router.push('/instructor/new')
  }

  render() {
    let instructorList
    if (this.state.instructors) {
      instructorList = this.state.instructors.map(instructor => getInstructorListItem(instructor))
    }

    const { auth } = this.props

    return (
      <div>
        <h2>Front End Masters Instructors</h2>
        { auth.isAuthenticated() && auth.isAdmin() && 
          <Button bsStyle="primary" onClick={this.onAddInstructorClick.bind(this)}>
            <i className="glyphicon glyphicon-plus"></i> Add Instructor
          </Button>
        }
        <ul>
          {instructorList}
        </ul>
      </div>
    )
  }
}

export default Instructor
