import { createSlice } from "@reduxjs/toolkit";



export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
        selectedMessage: null
    },

    reducers:{
        openToSendMsg: (state) => {
            state.sendMessageIsOpen = true;
        },
        closeToSendMsg: (state) => {
            state.sendMessageIsOpen = false;
        },
        openMessage: (state, action) => {
            state.selectedMessage = action.payload
        }
    }
});

export const { openToSendMsg, closeToSendMsg, openMessage} = mailSlice.actions;

export const selectMailMsg = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;

export default mailSlice.reducer;