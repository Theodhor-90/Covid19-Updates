import React from 'react';
import SearchBar from './SearchBar';
import Breadcrumb from './Breadcrumb';
import Table from './table/Table';
import Time from './Time';
import SingleShow from './SingleShow';

class Countries extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      continents: [],
      selectors: {
        World: true,
        Asia: false,
        Europe: false,
        North: false,
        South: false,
        Africa: false,
        Oceania: false
      },
      time: null,
      single: false,
      display: {}};
    this.scrollRef = React.createRef();
    this.orderByCountry = this.orderByCountry.bind(this);
    this.orderByInput = this.orderByInput.bind(this);
    this.handleContinents = this.handleContinents.bind(this);
    this.handleWorld = this.handleWorld.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.handleSingleCountry = this.handleSingleCountry.bind(this);
  }

  componentDidMount(){
    this.deconstructResponse();
  }

  handleSingleCountry(country){
    this.setState({ single: true, display: country});
  }

  handleAmerica(entry){
    if(entry === 'North-America') return 'North'
    else if(entry === 'South-America') return 'South';
    return entry;
  }

  scrollUp(){
    this.scrollRef.current.scrollTop = 0;
    this.scrollRef.current.scrollLeft = 0;
  }

  resetSelectors(){
    const middle = {
      World: false,
      Asia: false,
      Europe: false,
      North: false,
      South: false,
      Africa: false,
      Oceania: false
    };
    return middle;
  }

  orderByCountry(){
    const middle = this.state.data;
    middle.sort((a, b) => a.country.localeCompare(b.country));
    this.setState({ data: middle});
  }

  orderByInput(index1, index2){
    const middle = this.state.data.sort(
      (a,b) => b[index1][index2] - a[index1][index2]
    );
    this.setState({ data: middle});
  }

  deconstructResponse(){
    const contArray = ['Europe','North-America','South-America','Asia','Africa','Oceania'];
    const continents = [ ];
    contArray.forEach((continent,index) => {
      const entry = { };
      entry.continent = continent;
      const elements = this.props.data.filter(element => element.continent === continent && element.country !== continent);
      entry.countries = elements;
      continents.push(entry);

    })
    const world = this.props.data.filter(element => element.country === 'All');
    contArray.push('All');
    const countries = this.props.data.filter(element => !contArray.includes(element.country));

    this.setState({continents, world, countries, data: countries, time: world[0].day});
  }

  handleContinents(entry){
    this.scrollUp();
    const toChange = this.resetSelectors();
    const selected = this.handleAmerica(entry);
    toChange[selected] = true;
    const continent = this.state.continents.find(continent => continent.continent === entry);
    this.setState({ data: continent.countries, selectors: toChange, single: false});
  }

  handleWorld(){
    this.scrollUp();
    const middle = this.state.countries;
    const selectors= this.resetSelectors();
    selectors.World = true;
    this.setState({ data: middle, selectors, single: false});
  }

  render(){
    return(
      <div className='section'>

        <div className='columns is-multiline is-centered is-vcentered sticky back-white-search'>
          <div className='column is-one-quarter'>
            {this.state.time ?
              <Time time={this.state.time} />
              :
              <div></div>
            }
          </div>
          <div className='column is-half'>
            <SearchBar
              countries={this.state.countries}
              handleCountry={this.handleSingleCountry}
             />
          </div>
          <div className='column is-10'>
            <div className='container'>
              <Breadcrumb
                handleContinents={this.handleContinents}
                handleWorld={this.handleWorld}
                selectors={this.state.selectors}
                single={this.state.single}/>
            </div>
          </div>
        </div>

        <div className='columns is-centered'>
          <div className='column is-10'>
            <div ref={this.scrollRef} className='container is-overflowed-x'>
              {this.state.single ?
                <SingleShow country={this.state.display}/>
                :
                <Table
                  data={this.state.data}
                  orderByInput={this.orderByInput}
                  orderByCountry={this.orderByCountry}
                  handleCountry={this.handleSingleCountry}
                />
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Countries;
