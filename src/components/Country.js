import React from 'react';

const Country = (props) => {

  const adjustNumber = (entry) => {
    return entry.reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('');
  }



  const refineNumber = (entry) => {
    if(entry) {
      let middle = entry.toString().split('');

      if(middle.includes('+')) {
        return '+' + adjustNumber(middle.slice(1))}
      return adjustNumber(middle);
    }
    return '-';
  }

  return(
    <tr>
      <th className='roboto light-font'><a onClick={() => props.handleCountry(props.country)} >{props.country.country}</a></th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.cases.active)}</th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.cases.new)}</th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.cases.total)}</th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.deaths.total)}</th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.deaths.new)}</th>
      <th className='has-text-right roboto light-font'>{refineNumber(props.country.tests.total)}</th>
    </tr>
  )
}

export default Country;
