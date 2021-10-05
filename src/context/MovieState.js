import {useEffect, useReducer } from "react";
import MovieReducer from './MovieReducer';
import MovieContext from './MovieContext';


const MovieLayer = (props) => {

    const initialState = {
        myList:  [],
        watched:  [],
    }

    const [state, dispatch] = useReducer(MovieReducer, initialState)

    useEffect(() => {
        const myList = JSON.parse(localStorage.getItem("myList")) 
        const watched = JSON.parse(localStorage.getItem("watched"))

        dispatch({
            type:"SET_LIST",
            payload: {myList,watched}
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(state.myList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    const addMyList = (movie) => {
        dispatch({
            type: "ADD_MY_LIST",
            payload: movie
        })
    }

    const removeMylist = (id) => {
        dispatch({
            type: "REMOVE_MYLIST",
            payload: id
        })
    }

    const addMyWatched = (movie) => {
        dispatch({
            type: "ADD_MY_WATCHED",
            payload: movie
        })
    }

    const removeWatched = (id) => {
        dispatch({
            type: "REMOVE_WATCHED",
            payload: id
        })
    }

    return (
        <MovieContext.Provider
            value={{
                myList: state.myList,
                watched: state.watched,
                addMyList,
                addMyWatched,
                removeMylist,
                removeWatched
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )   
}

export default MovieLayer