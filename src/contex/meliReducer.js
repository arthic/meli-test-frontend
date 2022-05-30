import { types } from '../types/types';

export const meliReducer = (state = {}, action ) => {

    switch ( action.type ) {

        case types.categories:
            return {categories: action.payload}

        default:
            return state;
    }

}