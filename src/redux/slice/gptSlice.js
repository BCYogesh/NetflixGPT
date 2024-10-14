import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptView: false,
    },
    reducers: {
        GptSearchView: (state, action) => {
            state.toggleGptView = !state.toggleGptView;
        },
    },
});

export const { GptSearchView } = gptSlice.actions;

export default gptSlice.reducer;