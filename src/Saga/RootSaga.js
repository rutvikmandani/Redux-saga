import { all } from "redux-saga/effects";
import ProductSaga from "./ProductSaga";

export default function* RootSaga() {
    yield all([ProductSaga]);
}
