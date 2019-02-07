import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`,
          name: action.placeName,
          image: {
            uri:
              'http://vivaglammagazine.com/wp-content/uploads/2015/07/happy-cow.jpg'
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key
        }),
        selectedPlace: null
      }

    default:
      return state
  }
}

export default reducer
