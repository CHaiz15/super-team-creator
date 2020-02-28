import React, { Component } from 'react'
import './CreationZone.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTeam } from '../Actions'

class CreationZone extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      memberOne: '',
      memberTwo: '',
      memberThree: '',
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <>
        <section className='creation-zone'>
          <h1 className='creation-title'>Creation Zone</h1>
          <label className='team-name-label'>Team Name:</label>
          <input 
            name='name'
            value={this.state.name}
            className='team-name-input'
            placeholder='Team Name'
            onChange={(e) => this.handleChange(e)}
          />
          <div className='member-inputs'>
            <label className='member-label'>Team Member 1:
            <input 
              name='memberOne'
              value={this.state.memberOne}
              className='member-input'
              placeholder='Team Member 1'
              onChange={(e) => this.handleChange(e)}
            />
            </label>
            <label className='member-label'>Team Member 2:
            <input 
              name='memberTwo'
              value={this.state.memberTwo}
              className='member-input'
              placeholder='Team Member 2'
              onChange={(e) => this.handleChange(e)}
            />
            </label>
            <label className='member-label'>Team Member 3:
            <input 
              name='memberThree'
              value={this.state.memberThree}
              className='member-input'
              placeholder='Team Member 3'
              onChange={(e) => this.handleChange(e)}
            />
            </label>
          </div>
          <NavLink className='build-btn' type='button' to='/team' onClick={() => this.props.createTeam(this.state)}>Build</NavLink>
        </section>
      </>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
})


export default connect(null, mapDispatchToProps)(CreationZone);