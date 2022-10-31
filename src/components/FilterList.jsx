import React from 'react'
import './styles/cardFilterList.css'

const FilterList = ({suggedtedList, setSearchInput}) => {

  const handleClick = id => {setSearchInput(id)}
  console.log(suggedtedList)
  return (
    <ul>
        {
            suggedtedList?.map(location => (
                <li key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList