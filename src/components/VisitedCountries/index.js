import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesDetails, deleteVisitCountry} = props
  const {id, name, imageUrl} = visitedCountriesDetails

  const deleteCountry = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="country-item">
      <div>
        <img src={imageUrl} alt="thumbnail" className="img" />
        <div className="country-name-remove">
          <p className="list-heading">{name}</p>
          <button
            type="button"
            className="button-remove"
            onClick={deleteCountry}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
