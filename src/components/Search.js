import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { MeliContext } from '../contex/MeliContext'
import { types } from '../types/types'

export const Search = () => {

    const [inputValue, setInputValue] = useState('')
    const { dispatch } = useContext( MeliContext );

    const history = useHistory();

    const handleSearch = () => {
        // dispatch({
        //     type: types.search,
        //     payload: inputValue
        // });
        const inputCode = encodeURI(inputValue)
        history.replace(`/items?search=${ inputCode }`);
    }

    const handleEnterSearch = (e) => {
        setInputValue(e.target.value)
        if(e.key === 'Enter'){
            // dispatch({
            //     type: types.search,
            //     payload: inputValue
            // });
            const inputCode = encodeURI(inputValue)
            history.replace(`/items?search=${ inputCode }`);
        }
    }

    const handleHome = () => {
        dispatch({
            type: types.categories,
            payload: {categories: []}
        });
        history.replace('/');
    }

    return (
        <>
            <div className="search-container">

                <div onClick={handleHome}>
                    <img src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/Logo_ML_2x.png_rnraor.png" alt="Mercado Libre Icon" />
                </div>
                <div className="container-search-box">
                    <input
                        name='search'
                        type='text'
                        placeholder='Nunca dejes de buscar'
                        value={inputValue}
                        onChange={handleEnterSearch}
                        onKeyPress={handleEnterSearch}
                    />
                    <img
                        src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/ic_Search_2x.png_ne97hm.png"
                        alt="Mercado Libre Icon"
                        onClick={handleSearch}
                    />
                </div>
            </div>
        </>
    )
}
