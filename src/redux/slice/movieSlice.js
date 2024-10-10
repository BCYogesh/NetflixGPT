import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        nowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailervideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        }
    },
});


export const { nowPlayingMovies, addTrailervideo } = movieSlice.actions;

export default movieSlice.reducer;