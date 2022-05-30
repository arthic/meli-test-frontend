import React from 'react'
import { useHistory } from 'react-router-dom';

export const Item = ({details}) => {

    const history = useHistory();

    const handleDetails = () => {
        history.replace(`/items/${details.id}`);
    }

    return (
        <div className="result-item" onClick={handleDetails}>
            <div className="row-one">
                <div>
                    <img src={details.picture} alt={details.title} />
                </div>
                <div className="item-result-description">
                    <div className="container-price">
                        <p>$ {details.price.amount}<sub>{details.price.decimals}</sub></p>
                        <div>
                            {
                                details.free_shipping &&
                                <img src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/ic_shipping_2x.png_ja5ccg.png" alt="shipping" />
                            }
                        </div>
                    </div>
                    <div className="item-result-description-facs">
                        <p>{details.title}</p>
                    </div>
                </div>
            </div>
            <div className="item-result-city">
                <p>{details.state_name}</p>
            </div>
        </div>
    )
}
