import { combineReducers } from "redux"
import ProductReduce from "./Reducers";

const rootReducers = combineReducers({
    products: ProductReduce,
})

export default rootReducers;