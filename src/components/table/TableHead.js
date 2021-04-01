import React from 'react';

const TableHead = (props) => {
  return(
    <thead>
      <tr>
        <th className='roboto sticky back-white-table' onClick={props.orderByCountry}><a>Country</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('cases','active')}><a>Active cases</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('cases', 'new')}><a>New cases</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('cases', 'total')}><a>Total cases</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('deaths', 'total')}><a>Total deaths</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('deaths', 'new')}><a>New deaths</a></th>
        <th className='has-text-right roboto sticky back-white-table' onClick={() => props.orderByInput('tests', 'total')}><a>Tests</a></th>
      </tr>
    </thead>
  )
}

export default TableHead;
