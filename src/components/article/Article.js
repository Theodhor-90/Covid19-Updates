import React from 'react';

const Article = (props) => {



  const dataKeys = Object.keys(props.data);
  const dataValues = Object.values(props.data);

  const refineString = (entry) => {
    if(entry === '1M_pop') entry = 'every 1M people';
    if(entry === 'new') entry = 'last 24 hours'
    return entry.charAt(0).toUpperCase() + entry.slice(1);
  }

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
    <article className={`message ${props.description === 'Cases' ? 'is-primary'
      : props.description === 'Deaths' ? 'is-danger' : 'is-link'}`}>
      <div className='message-header centralized is-size-6-mobile is-size-5-tablet is-size-4-desktop'>{props.description}</div>
      <div className='message-body'>


        <table className='table is-striped is-full-width is-hoverable'>
          <tbody>
            {dataKeys.map((key,index) =>
              <tr key={index}>
                <th>
                  <p className='roboto article-element is-size-7-mobile is-size-6-tablet is-size-5-desktop'> {refineString(key)} </p>
                </th>
                <th>
                  <p className='roboto article-element is-size-7-mobile is-size-6-tablet is-size-5-desktop'>
                    {(dataValues.length === 3 && index === 1) || index === 4 ? dataValues[index] : refineNumber(dataValues[index])}
                  </p>
                </th>
              </tr>
            )}
          </tbody>
        </table>

        {/* <div className='columns justify-around is-mobile'>
          <div className='column is-5-desktop '>
            {dataKeys.map( (info,index) =>
              <p className='roboto article-element' key={index}> {refineString(info)} </p>
            )}
          </div>
          <div className='column is-5-desktop '>
            {dataValues.map((info,index) =>
              <p className='roboto article-element' key={index}> {(dataValues.length === 3 && index === 1) || index === 4 ? info : refineNumber(info)} </p>
            )}
          </div>
        </div> */}
      </div>
    </article>
  )
}

export default Article;
