import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getItemDescription } from '../helpers/getMELI';

export const Details = () => {
    const [details, setDetails] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getItemDescription(id)
                .then((res) => res.json())
                .then((data) => {
                    setDetails(data);
                })
                .catch((err) => console.log("Error al consultar MELI :(", err));
        }
    }, [id]);

    return (
        <>
            <div className="item-details">
                <div className="item-details-main">
                    <img src={details.picture} alt="mac" />
                    <div>
                        {
                            details.condition === 'new' ? (
                                <p className="total-sales">Nuevo - {details.sold_quantity} vendidos</p>
                            ) : (
                                <p className="total-sales">{details.sold_quantity} vendidos</p>
                            )
                        }
                        {
                            details.item && (
                                <>
                                    <h1>{details.item.title}</h1>
                                    <p className="item-details-price">
                                        $ {details.item.price.amount}
                                        <sub>{details.item.price.decimals}</sub>
                                    </p>
                                </>
                            )
                        }
                        <a href={details.buy_link} target="_blank" rel="noopener noreferrer">
                            <button type="button">Comprar</button>
                        </a>
                    </div>
                </div>
                <div className="item-details-description">
                    <h2>Descripción del producto</h2>
                    <p>{details.description}</p>
                </div>
            </div>
        </>
    )
}
