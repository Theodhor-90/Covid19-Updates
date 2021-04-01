import React from 'react';
import Article from './article/Article.js';

const SingleShow = (props) => {
  return(
    <div className='container'>
      <div className='title container roboto has-text-centered is-size-6-mobile is-size-5-tablet is-size-3-desktop'>
        {`Latest updates and stats of ${props.country.country}`}
      </div>
      <div className='container mb-4'>
        <Article data={props.country.cases} description='Cases'></Article>
      </div>
      <div className='container mb-4'>
        <Article data={props.country.deaths} description='Deaths'></Article>
      </div>
      <div className='container mb-4'>
        <Article data={props.country.tests} description='Tests'></Article>
      </div>
    </div>

  )
  }

export default SingleShow;
