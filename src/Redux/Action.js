import { SET_PRODUCTS, FETCH_PRODUCTS } from "./ActionType";
export const fetchProducts = () => {
    return { type: FETCH_PRODUCTS };
};

export const setProducts = (products) => {
    // debugger;
    return {
        type: "SET_PRODUCTS",
        payload: products,
    };
};