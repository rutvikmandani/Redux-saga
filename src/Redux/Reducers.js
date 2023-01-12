import { SET_PRODUCTS } from "./ActionType";
const initialState = {
    products: [],
}

// const initialState = [];

const ProductReduce = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: [...state, action.payload.data]
            };
        // case SET_PRODUCTS:
        //     // debugger;
        //     console.log("action:", action.payload.data)
        //     return [...state, action.payload.data];
        default:
            return state;
    }
}
export default ProductReduce;
