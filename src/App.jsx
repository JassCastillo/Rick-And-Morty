import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident';
import Error from './components/Error';
import FilterList from './components/FilterList';
import LocationInfo from './components/LocationInfo';
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, SetLocation] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [suggedtedList, setSuggestedList] = useState();
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber();
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`


    axios.get(URL)
      .then(res => {
        setHasError(false)
        SetLocation(res.data)})
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idlocation.value)
  }

  const handleChange = event => {
    if (event.target.value === '') {
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <img className='picture' src='/img/picture.png' alt="" />
      <img className='name-picture' src="/img/name.png" alt="" />
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          className='input-search'
          id='idlocation'
          type="text"
          placeholder="Enter another number from 1 to 126"
          onChange={handleChange} />
        <button className='btn-search'>Search</button>
        <FilterList
          suggedtedList={suggedtedList}
          setSearchInput={setSearchInput}
        />
      </form>
      {
        hasError ?
          <Error />
          :
          <>
            <LocationInfo location={location} />
            <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
