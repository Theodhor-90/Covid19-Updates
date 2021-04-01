import React from 'react';

const Time = (props) => {

  let BrakeTime = props.time.split('-');

  const months = [
    'Jannuary',
    'Febbruary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const GiveMonth = (entry) => {
    return months[parseInt(entry)];
  }

  const displayTime = 'Last updated on ' + BrakeTime[2] + ' ' + GiveMonth(BrakeTime[1]) + ' ' + BrakeTime[0] + '  6:00 GMT';

  return(
    <div className='container roboto centralized'>
      {displayTime}
    </div>
  )
}

export default Time;
