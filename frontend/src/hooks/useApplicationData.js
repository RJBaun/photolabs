import React, { useReducer } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const initialState = {
    favourites: [],
    iconFill: false,
    modal: false,
    modalObj: photos[0]
  }

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
        }
      default:
        return state;
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
  
export default useApplicationData;