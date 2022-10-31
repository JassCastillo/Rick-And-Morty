import React from 'react'
import './styles/cardLocation.css'
const LocationInfo = ({location}) => {

  return (
    <article className='card-container-location'>
          <ul className='card-list'>
            <li className='card-name'>Name: <span className='card-span'>{location?.name}</span></li>
            <li className='card-item'>Type: <span className='card-span'>{location?.type}</span></li>
            <li className='card-item'>Dimension: <span className='card-span'>{location?.dimension}</span></li>
            <li className='card-item'>Number of Residents: <span className='card-span'>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo