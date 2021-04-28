import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

export const Result = () => {
    const res = {
        firstname: store.getState().firstname,
        surname: store.getState().surname,
        lastname: store.getState().lastname,
        birth: store.getState().birthdate,
        email: store.getState().email,
    }
    return (
        <>
            <h1>Поздравляем! Ваши данные:</h1>
            <pre>{JSON.stringify(res, null, 2)}</pre>
        </>
    )
}