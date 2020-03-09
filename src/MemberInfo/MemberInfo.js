import React from 'react'
import './MemberInfo.scss'

export const MemberInfo = (props) => {
  let {member} = props.location.state

  return (
    <section className='member-info'>
      <section className='info-section'>
          <div className='names-div'>
            <h1 className='name-title'>{member.name}</h1>
          </div>
        <div className='info-holder'>
          <img className='selected-member-image' src={member.image.url} alt='member one'/>
        <div className='stats-container'>
          <ul className='powers-list'>Appearance:
            <li>Gender: {member.appearance.gender}</li>
            <li>Race: {member.appearance.race}</li>
            <li>Height: {member.appearance.height[0]}</li>
            <li>Weight: {member.appearance.weight[0]}</li>
            <li>Eye Color: {member.appearance['eye-color']}</li>
            <li>Hair Color: {member.appearance['hair-color']}</li>
          </ul>
          <ul className='powers-list'>Biography:
            <li>Real Name: {member.biography['full-name']}</li>
            <li>Home: {member.biography['place-of-birth']}</li>
            <li>Work: {member.work.occupation}</li>
            <li>Alignment: {member.biography.alignment}</li>
            <li>Publisher: {member.biography.publisher}</li>
            <ul>Aliases: {member.biography.aliases.map(alias => <li>"{alias}"</li>)}</ul>
          </ul>
          <ul className='powers-list'>Stats:
            <li>Intelligence: {member.powerstats.intelligence}</li>
            <li>strength: {member.powerstats.strength}</li>
            <li>Speed: {member.powerstats.speed}</li>
            <li>Durability: {member.powerstats.durability}</li>
            <li>Power: {member.powerstats.power}</li>
            <li>Combat: {member.powerstats.combat}</li>
          </ul>
        </div>
        </div>
      </section>
    </section>
  )
}

export default MemberInfo