import { useState, useEffect } from 'react'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import countryService from './services/countryService'
import './App.css'

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const initialFetch = () => {
    countryService.getCountries()
    .then(
      getCountriesResponse =>  setCountries(getCountriesResponse)
    )
  }
  
  const showCountry = (selectedCountry)=> {
    setSearch(selectedCountry)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  useEffect(initialFetch, [])
  return (
    <>
      <Search search={search} handleSearchChange = {handleSearchChange}/>
      <SearchResult countryCount = {countriesToShow.length} searchCount = {search.length} countryList = {countriesToShow} showCountry={showCountry}/>
    </>
  )
}

export default App
