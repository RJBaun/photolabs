import React, { useState } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const [state, setState] = useState({
    favourites: [],
    iconFill: false,
    modal: false,
    modalObj: photos[0]
  })
  
  const saveFavourites = (photo) => {
    setState(prevState => {
      const updatedFavourites = prevState.favourites.includes(photo) ? 
        prevState.favourites.filter(fav => fav.id !== photo.id) :
        [...prevState.favourites, photo];
      return {
        ...prevState,
        favourites: updatedFavourites,
        iconFill: !!updatedFavourites.length
      }
    })
  }
  
  const toggleModal = (photoObj=photos[0]) => {
    setState(prevState => ({
      ...prevState,
      modal: !prevState.modal,
      modalObj: photoObj
    }))
  }
  
  return {
    state,
    saveFavourites,
    toggleModal
  }
}
  
export default useApplicationData;