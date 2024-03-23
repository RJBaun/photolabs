import React, { useReducer, useEffect } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const initialState = {
    favourites: [],
    iconFill: false,
    modal: false,
    modalObj: photos[0],
    photoData: [],
    topicData: []
  }

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

  const reducer = (state, action) => {
    switch(action.type) {
      case 'UPDATE_FAVOURITES':
        const { photo, favourites } = action.payload;
        const updatedFavourites = favourites.includes(photo) ? 
          favourites.filter(fav => fav.id !== photo.id) :
          [...state.favourites, photo];
        return {
          ...state,
          favourites: updatedFavourites,
          iconFill: !!updatedFavourites.length
        };
      case 'TOGGLE_MODAL':
        const { photoObj } = action.payload;
        return {
          ...state,
          modal: !state.modal,
          modalObj: photoObj
        };
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
      default:
        return state;
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
  
export default useApplicationData;