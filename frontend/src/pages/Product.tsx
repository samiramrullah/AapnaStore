import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "../utils/Cards/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { ProductInterface, STATUS, fetchProducts } from "../redux/ProductSlice";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import Loader from "../utils/Helper/Loader";
import UnderMaintenence from "../utils/Helper/UnderMaintenence";

const Product = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.products)
    const productFetchStatus = useSelector((state: RootState) => state.product.productFetchStatus)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    if (productFetchStatus === STATUS.loading) {
        return (
            <Loader />
        )
    }
    else if (productFetchStatus === STATUS.ideal) {
        return (
            <Wrapper>

                <div className="bg-white py-6 sm:py-8 lg:py-20">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-6 flex items-end justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

                            <a href="1" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a>
                        </div>

                        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                            {products?.map((itm: ProductInterface) => (

                                <ProductCard title={itm.title} id={itm.id} description={itm.description} category={itm.category} image={itm.image} rating={itm.rating} price={itm.price} />

                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
    else if (productFetchStatus === STATUS.error) {
        return (
            <Wrapper>
                <div className="flex items-center justify-center sm:h-[50rem] h-[45rem]">
                    <UnderMaintenence />
                </div>
            </Wrapper>
        )

    }
    else {
        return null
    }

};

export default Product;
