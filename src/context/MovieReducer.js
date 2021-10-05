const MovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        myList: action.payload.myList,
        watched: action.payload.watched
      }
    case "ADD_MY_LIST":
      return {
        ...state,
        myList: [action.payload, ...state.myList]
      }
    case "REMOVE_MYLIST":
      return {
        ...state,
        myList: state.myList.filter(movie => movie.imdbID !== action.payload)
      }
    case "ADD_MY_WATCHED":
      return {
        ...state,
        myList: state.myList.filter(
          movie => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched]
      }
    case "REMOVE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.imdbID !== action.payload)
      }
    default:
      return state;
  }
};

export default MovieReducer