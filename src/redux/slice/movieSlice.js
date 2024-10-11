import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        nowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        popularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        upComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailervideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
    },
});


export const { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies, addTrailervideo } = movieSlice.actions;

export default movieSlice.reducer;