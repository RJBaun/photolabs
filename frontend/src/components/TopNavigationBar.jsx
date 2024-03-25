import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => props.dispatch({ type: 'GET_PHOTOS_BY_TOPICS', payload: {topicId: undefined}})}>PhotoLabs</span>
      <span className='non-logo-nav'>
        <TopicList topics={props.topics} dispatch={props.dispatch}/>
        <FavBadge dispatch={props.dispatch} viewFavs={props.viewFavs} favourites={props.favourites} favouriteExists={props.favouriteExists} />
      </span>
    </div>
  )
}

export default TopNavigation;