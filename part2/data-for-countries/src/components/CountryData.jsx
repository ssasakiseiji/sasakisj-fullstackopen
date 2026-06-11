

const CountryData = ({country}) => {
    const firstCountry = country[0] //asumiendo que solo se pasa un país
    const languagesArray = Object.values(firstCountry.languages)
    return(
    <>
        <h1>{firstCountry.name.common}</h1>
        <p>{firstCountry.capital}</p>
        <p>Area {firstCountry.area}</p>
        <ul>
        {languagesArray.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
        </ul>
        <h3>Flag:</h3>
        <img 
          src={firstCountry.flags.svg} 
          alt={firstCountry.flags.alt || `Flag of ${firstCountry.name.common}`} 
          style={{ width: '150px', border: '1px solid #ccc' }} 
        />
    </>
    )
}

export default CountryData