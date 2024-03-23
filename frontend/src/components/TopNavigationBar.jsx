import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className='non-logo-nav'>
        <TopicList topics={props.topics}/>
        <FavBadge favouriteExists={props.favouriteExists} />
      </span>
    </div>
  )
}

export default TopNavigation;