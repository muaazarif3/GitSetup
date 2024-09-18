import { createSlice } from "@reduxjs/toolkit";

let initialState  = {
    value : 0
}

export let showSlice = createSlice({
    name : 'show data',
    initialState ,
    reducers : {
        showData : (state ) =>{
            state.value = state.value
        },
        Increment : (state) => {
            state.value = state.value + 1
        },
        userIncrement : (state ,action) => {
            state.value = state.value + action.payload
        }
    }
})


// export two things

// fist reduces function in slice action
export let {showData , Increment , userIncrement} = showSlice.actions;

// secound export reducers

export default showSlice.reducer







