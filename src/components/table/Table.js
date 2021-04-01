import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (props) => {

  return(
    <div className='container'>
      <table className='table is-hoverable is-striped is-fullwidth is-size-7-mobile'>
        <TableHead orderByCountry={props.orderByCountry} orderByInput={props.orderByInput}/>
        <TableBody data={props.data} handleCountry={props.handleCountry}/>
      </table>
    </div>
  )
}

export default Table;
