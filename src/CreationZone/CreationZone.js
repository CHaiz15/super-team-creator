import React, { Component } from 'react';
import './CreationZone.scss';
import { connect } from 'react-redux';
import { createTeam } from '../Actions';
import { getMember } from '../apiCalls';
import { NavLink } from 'react-router-dom'


class CreationZone extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Best Team Ever',
      memberOne: 'Hulk',
      memberTwo: 'Thanos',
      memberThree: 'Batman',
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  fetchMembers = async () => {
    let member1, member2, member3;
    let response1 = await getMember(this.state.memberOne)
      if(response1.response === 'error') {

      } else {
        member1 = response1.results[0];
      }
    let response2 = await getMember(this.state.memberTwo)
      if(response2.response === 'error') {

      } else {
        member2 = response2.results[0];
      }
    let response3 = await getMember(this.state.memberThree)
      if(response3.response === 'error') {

      } else {
        member3 = response3.results[0];
      }
    
    let team = {
      name: this.state.name,
      memberOne: member1,
      memberTwo: member2,
      memberThree: member3,
    }

    this.props.createTeam(team)
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
          <NavLink className='build-btn' type='button' to='/team' onClick={() => this.fetchMembers()}>Build</NavLink>
        </section>
      </>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
})


export default connect(null, mapDispatchToProps)(CreationZone);