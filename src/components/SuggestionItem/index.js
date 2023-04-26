// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchItems, updateInput} = props
  const {suggestion} = searchItems

  const onResult = () => {
    updateInput(suggestion)
  }
  return (
    <li className="card-container">
      <div className="card-sub-container">
        <p className="description"> {suggestion} </p>
        <button type="button" className="button" onClick={onResult}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="img"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
