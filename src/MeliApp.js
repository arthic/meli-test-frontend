import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { MeliContext } from './contex/MeliContext'
import { meliReducer } from './contex/meliReducer'

const init = () => {
    return { categories: [] };
}


export const MeliApp = () => {

    const [ categories, dispatch ] = useReducer(meliReducer, {}, init);

    return (
        <MeliContext.Provider value={{ categories, dispatch }}>
            <AppRouter />
        </MeliContext.Provider>
    )
}
