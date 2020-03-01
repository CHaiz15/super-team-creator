import React, { Component } from 'react'
import { getMembers } from '../apiCalls'
import { connect } from 'react-redux'

export class TeamDisplay extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return ( 
        <div>
          <h1 className='creation-title'>{this.props.team.name}</h1>
          <div>
            <h3>Thanos</h3>
            <ul>Stats:
              <li>Power:</li>
            </ul>
          </div>
          <div>
            <h3>Thanos</h3>
            <ul>Stats:
              <li>Power:</li>
            </ul>
          </div>
          <div>
            <h3>Thanos</h3>
            <ul>Stats:
              <li>Power:</li>
            </ul>
          </div>
        </div>
      )
    }
}

export const mapStateToProps = state => ({
  team: state.team,
})

export default connect(mapStateToProps)(TeamDisplay)