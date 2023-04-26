// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = props => {
    this.setState({searchInput: props})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="bg-container">
          <div className="bg-sub-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="search Google"
              className="input-ele"
              onChange={this.onInputSearch}
            />
          </div>
          <ul className="ul">
            {searchResult.map(eachUser => (
              <SuggestionItem
                searchItems={eachUser}
                key={eachUser.id}
                updateInput={this.updateInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
