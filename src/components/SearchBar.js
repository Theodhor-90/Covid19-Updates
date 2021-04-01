import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { countries: [], searchInput: null, loading: false, display: false };
    this.handleInput = this.handleInput.bind(this);
    this.searchRef = React.createRef();
  }

  handleInput(e){
    const display = e.target.value.length > 0 ? true : false;
    const loading = e.target.value ? true : false;
    let countries = this.props.countries;
    const re = new RegExp(e.target.value,'i');
    countries = countries.filter(country => country.country.match(re) !== null);
    this.setState({ searchInput: e.target.value, loading, display, countries});
  }

  handleSubmit(country){
    this.searchRef.current.value = '';
    this.props.handleCountry(country);
    this.setState({
      searchInput : '',
      loading: false,
      display: false,
      countries: []
    })
  }

  render(){
    return(
      <div className='container'>
        <div className='field'>
          <div className='control'>
            <input ref={this.searchRef} className='input' onChange={this.handleInput} type='text' placeholder='Search country'/>
          </div>
        </div>
        {this.state.display && this.state.countries ? this.state.countries.map((country,index) =>
          <a className='roboto search-span is-size-7-mobile is-size-6-tablet' key={index} onClick={() => this.handleSubmit(country)}>{country.country} </a>
        )
        :
          <div></div>
        }
      </div>
    )
  }
}

export default SearchBar;
