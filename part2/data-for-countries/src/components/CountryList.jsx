const CountryList = ({countries}) => {
    return (
        <div>
            <ul>
                {countries.map((country) => {
                    return <li key= {country.cca3}>{country.name.common}</li>
                })}
            </ul>
        </div>
    )
}

export default CountryList