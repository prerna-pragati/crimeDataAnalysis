import { createSlice } from '@reduxjs/toolkit'

export const querySlice = createSlice({
    name: 'querySelected',
    initialState: {
        selectedQuery: null
    },
    reducers:{
        addQuery: (state,action) => {
            console.log(`Inside redux ${action.payload}`)
            state.selectedQuery = action.payload;
        }
    }
})

export const { addQuery } = querySlice.actions;

export default querySlice.reducer