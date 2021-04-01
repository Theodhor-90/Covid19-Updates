import React from 'react';
import Country from '../Country';

const TableBody = (props) => {
  return(
    <tbody>
      {props.data.map(country =>
          <Country country={country} key={country.country} handleCountry={props.handleCountry}/>
      )}
    </tbody>
  )
}

export default TableBody;
