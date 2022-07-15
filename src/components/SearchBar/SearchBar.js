import './SearchBar.scss';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    focus: false,
  }
  
  onFocus = () => {
    this.setState({
      focus: true
    })
  }

  onBlur = () => {
    this.setState({
      focus: false
    })
  }

  getClass = () => {
    if (this.state.focus) {
      return "active-state"
    } else {
      return ""
    }
  }

  render() {

    const addClass = this.getClass();
    
    return (
      <input className={addClass} onFocus={this.onFocus} onBlur={this.onBlur} type='search' id='searchBar' placeholder='Search'/>
    );
  }
};

export default SearchBar;