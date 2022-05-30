import React, {useContext} from 'react'
import { MeliContext } from '../contex/MeliContext'

export const Category = () => {

    const {categories: categoriesContext}  = useContext( MeliContext );
    const {categories} = categoriesContext || null

    return (
        <>
            {
                categories.length > 1 && (
                    <p className="global-category"> {categories[0]} &#62; {categories[1]} &#62; {categories[2]} &#62; <span>{categories[3]}</span>
                    </p>
                )
            }
        </>
    )
}