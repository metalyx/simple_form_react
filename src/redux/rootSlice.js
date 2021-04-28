import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        firstname: "",
        surname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpassword: "",
        birthdate: Date("")
    },
    reducers: {
        setFirstname: (state, action) => {state.firstname = action.payload},
        setSurname: (state, action) => {state.surname = action.payload},
        setLastname: (state, action) => {state.lastname = action.payload},
        setBirthDate: (state, action) => {state.birthdate = action.payload},
        setEmail: (state, action) => {state.email = action.payload},
        setPassword: (state, action) => {state.password = action.payload},
        setRepeatPassword: (state, action) => {state.repeatpassword = action.payload}
    }
})

export const reducer = rootSlice.reducer;

export const { setFirstname, setSurname, setLastname, setEmail, setPassword, setRepeatPassword, setBirthDate} = rootSlice.actions;