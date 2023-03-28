import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from "app/stores/store";

import { SLICE_INIT, API_ASSISTANT } from 'module/assistant';

export const getActSkill = createAsyncThunk("assistant/getActSkill", async (_, { rejectWithValue, dispatch }) => {
    try {
        // const result = (await API_ASSISTANT.getActSkill()).data;
        console.log();
        // return [...result];
    } catch (error: any) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response);
    }
});

const assistantSlice = createSlice({
    name: "assistant",
    initialState: SLICE_INIT,
    reducers: {
        resetInitialState(state) { },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getActSkill.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(getActSkill.fulfilled, (state, action: PayloadAction<Array<NHOME_MODEL.IBanner>>) => {
    //             state.loading = false;
    //             state.list = action.payload;
    //             state.error = null;
    //         })
    //         .addCase(getActSkill.rejected, (state, action: PayloadAction<any>) => {

    //         });
    // }
})

// Actions

export const assistantAction = assistantSlice.actions;

// Selectors

export const selectAssistant = (state: RootState) => state.assistant;

// Reducer
const assistantReducer = assistantSlice.reducer;
export default assistantReducer