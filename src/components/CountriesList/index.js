import './index.css'

const CountriesList = props => {
  const {countriesNameDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countriesNameDetails

  const countryText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="list-items">
      <p className="list-heading">{name}</p>
      {isVisited === true ? (
        <p className="list-desc">{countryText}</p>
      ) : (
        <button type="button" className="button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
