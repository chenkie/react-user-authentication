import React, { PropTypes as T } from 'react'
import {Panel, Col} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import { Link } from 'react-router'
import jwtDecode from 'jwt-decode'

export class Profile extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: jwtDecode(this.props.auth.getToken()),
      payload: jwtDecode(this.props.auth.getToken())
    }
    this.state.profile.gravatar = `${this.state.profile.gravatar}?s=200`
  }

  render(){
    const { profile, payload } = this.state
    return (
      <div>
        <h2>Profile</h2>
        <Panel>
          <Col sm={3}>
            <img src={profile.gravatar} alt="Avatar" />
          </Col>
          <Col sm={9}>
            <h2>{profile.username}</h2>
            <hr />
            <p><i className="glyphicon glyphicon-envelope"></i> { profile.email }</p>
            <h4>Payload</h4>
            <pre>{ JSON.stringify(payload, null, 2) }</pre>
          </Col>
        </Panel>
      </div>
    )
  }
}

export default Profile
