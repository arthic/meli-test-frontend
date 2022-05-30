import React, { useContext, useState, useEffect } from 'react'
import { MeliContext } from '../contex/MeliContext'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getMeliSearch } from '../helpers/getMELI';
import { types } from '../types/types'
import { Item } from './Item';

export const Results = () => {

    const [items, setItems] = useState([]);
    const {dispatch}  = useContext( MeliContext );

    const location = useLocation();
    const {search: querySearch} = queryString.parse(location.search);


    useEffect(() => {
        getMeliSearch(querySearch)
            .then((res) => res.json())
            .then((data) => {
                setItems(data.results);
                dispatch({
                    type: types.categories,
                    payload: data.categories
                });
            })
            .catch((err) => console.log("Error al consultar MELI :(", err));
    }, [querySearch, dispatch]);

    return (
        <>
            <div className="container-result">
                {
                    items.map( item => (
                        <Item details={item} key={item.id} />
                    ))
                }
            </div>
        </>
    )
}
