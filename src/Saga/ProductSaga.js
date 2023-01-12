import { takeEvery, call, put, all, takeLatest } from "redux-saga/effects";
import { setProducts } from "../Redux/Action";
import productsService from "../Api/Api";
import { SET_PRODUCTS, FETCH_PRODUCTS } from "../Redux/ActionType";
import axios from "axios";




async function getProducts() {
    // return await Axios.get('https://fakestoreapi.com/products', payload);
    return await axios.get('https://fakestoreapi.com/products');
}
function* fetchProducts({ payload }) {
    try {
        const products = yield call(getProducts, payload);
        // if (products)
            yield put(setProducts(products));
            // yield put({
            //     type: SET_PRODUCTS,
            //   });
    } catch (error) {
        console.log('error', error)
    }
}

export default all([
    takeLatest(FETCH_PRODUCTS, fetchProducts),
]);
