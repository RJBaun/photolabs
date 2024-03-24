import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

const { id, slug, title } = props.topic;
  return (
    <div className="topic-list__item">
      <span onClick={() => props.dispatch({ type: 'GET_PHOTOS_BY_TOPICS', payload: {topicId: id}})}>{title}</span>
    </div>
  );
};

export default TopicListItem;
