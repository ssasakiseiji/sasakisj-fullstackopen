const CountryList = ({countries, showCountry}) => {
    return (
        <div>
            <ul>
                {countries.map((country) => {
                    return <li key= {country.cca3}>{country.name.common}<button onClick={()=> showCountry(country.name.common)}>show</button></li>
                })}
            </ul>
        </div>
    )
}

export default CountryList