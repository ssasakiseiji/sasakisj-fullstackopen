import CountryList from './CountryList'
import CountryData from './CountryData'

const SearchResult = ({countryCount,searchCount,countryList,showCountry})=>{
    if (searchCount == 0) {
        return <p>Write to search a country</p>
    } else if (countryCount == 1){
        return <CountryData country={countryList} />
    } else if (countryCount <= 10 && countryCount > 0) {
        return <CountryList countries={countryList} showCountry={showCountry}/> 
    } else if (countryCount > 10) {
        return <p> Too many matches, specify another filter</p>
    }  else if (countryCount == 0) {
        return <p>No countries found</p>
    } else {
        return <p>We had an issue with your search</p>
    }
}

export default SearchResult