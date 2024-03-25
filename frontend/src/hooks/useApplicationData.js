import React, { useReducer, useEffect } from 'react';
import photos from 'mocks/photos';

const initialState = {
  favourites: [],
  iconFill: false,
  modal: false,
  modalObj: photos[0],
  photoData: [],
  topicData: [],
  selectedTopic: []
};

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  UPDATE_FAVOURITES: 'UPDATE_FAVOURITES',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.UPDATE_FAVOURITES:
      const { photo, favourites } = action.payload;
      const updatedFavourites = favourites.includes(photo) ? 
        favourites.filter(fav => fav.id !== photo.id) :
        [...state.favourites, photo];
      return {
        ...state,
        favourites: updatedFavourites,
        iconFill: !!updatedFavourites.length
      };
    case ACTIONS.TOGGLE_MODAL:
      const { photoObj } = action.payload;
      return {
        ...state,
        modal: !state.modal,
        modalObj: photoObj
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        selectedTopic: [action.payload.topicId]
      };
    default:
      return state;
  };
};

const useApplicationData = () => {


  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_TOPIC_DATA", payload: data }))
  }, []);

  useEffect(() => {
    if (state.selectedTopic[0]) {
    fetch(`/api/topics/photos/${state.selectedTopic[0]}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
    } else {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
    }
  }, [state.selectedTopic]);

  return { state, dispatch };
}
  
export default useApplicationData;