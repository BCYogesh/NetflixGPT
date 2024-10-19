import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptView: false,
        gptMovieNames: null,
        gptMovies: null,
    },
    reducers: {
        gptSearchView: (state) => {
            state.toggleGptView = !state.toggleGptView;
        },
        gptMoviesList: (state, action) => {
            const { gptMovieNamesList, gptMovies } = action.payload;
            state.gptMovies = gptMovies;
            state.gptMovieNames = gptMovieNamesList;
        },
        clearMovieList: (state) => {
            state.gptMovieNames = [];
            state.gptMovies = [];
        }
    },
});

export const { gptSearchView, gptMoviesList, clearMovieList } = gptSlice.actions;

export default gptSlice.reducer;