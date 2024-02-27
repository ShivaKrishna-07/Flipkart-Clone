

import * as actionTypes from '../constants/productConstants.js'

export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products: action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
            return {products: action.payload}
        default:
            return state;
    }
}
