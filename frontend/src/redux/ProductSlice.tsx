import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {  RootState } from "./store";
import axios from "axios";

export const STATUS = Object.freeze({
  ideal: 'IDEAL',
  loading: 'LOADING',
  error: 'ERROR',
});


export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: ProductInterface[];
  productFetchStatus: string;
}

const initialState: ProductState = {
  products: [],
  productFetchStatus: STATUS.ideal,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductInterface[]>) {
      state.products = action.payload;
    },
    setProductFetchStatus(state, action: PayloadAction<string>) {
      state.productFetchStatus = action.payload;
    },
  },
});

export const { setProducts, setProductFetchStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: ThunkDispatch<RootState, undefined, AnyAction>, getState: () => RootState) {
    dispatch(setProductFetchStatus(STATUS.loading));
    try {
      const response = await axios.get<ProductInterface[]>("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
      dispatch(setProductFetchStatus(STATUS.ideal));
    } catch (error) {
      dispatch(setProductFetchStatus(STATUS.error));
    }
  }
}
