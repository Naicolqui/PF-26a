import axios from "axios";
const URL_FOR_FETCH_PRODUCTS='http://localhost:3001/products';
const URL_FOR_FETCH_CATEGORIES='http://localhost:3001/categories'
export const FETCH_PRODUCTS= 'FETCH_PRODUCTS';
export const FETCH_CATEGORIES= 'FETCH_CATEGORIES'
export const ADD_FILTER='ADD_FILTER';

export function fetchProducts() {

    return function (dispatch) {
        axios.get(URL_FOR_FETCH_PRODUCTS)
            .then((product) => {
                //console.log(product)
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: product.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
export function fetchCategories(){
    return function(dispatch){
        axios.get(URL_FOR_FETCH_CATEGORIES)
        .then((categories)=>{
            console.log('soy action fetchcate',categories)
            dispatch({
                type: FETCH_CATEGORIES,
                payload: categories.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export function addFilter(filter){

    return function(dispatch){
        dispatch({
            type:ADD_FILTER,
            payload:filter
        })
    }
}
