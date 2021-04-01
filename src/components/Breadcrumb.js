import React from 'react';

const Breadcrumb = (props) =>{
  return(
    <nav className='breadcrumb has-bullet-separator is-centered is-size-7-mobile is-size-7-tablet is-size-6-desktop back-white sticky'>
      <ul>
        <li className={props.selectors.World && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={props.handleWorld}>World</a>
        </li>
        <li className={props.selectors.Europe && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('Europe')}>Europe </a>
        </li>
        <li className={props.selectors.Asia && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('Asia')}>Asia </a>
        </li>
        <li className={props.selectors.North && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('North-America')}>N.America </a>
        </li>
        <li className={props.selectors.Africa && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('Africa')}>Africa </a>
        </li>
        <li className={props.selectors.South && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('South-America')}>S.America </a>
        </li>
        <li className={props.selectors.Oceania && !props.single ? 'is-active' : ''}>
          <a className='roboto' onClick={() => props.handleContinents('Oceania')}>Oceania </a>
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumb;
