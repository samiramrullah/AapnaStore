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

                <div className="pt-10 sm:pt-14 2xl:container 2xl:mx-auto">
                    <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Summer Collection Vol-1</p>
                    </div>
                    <div className=" py-6 lg:px-20 md:px-6 px-4">
                        <p className=" font-normal text-sm leading-3 text-gray-600 ">Home / Products</p>
                        <hr className=" w-full bg-gray-200 my-6" />

                        <div className=" flex justify-between items-center">
                            <div className=" flex space-x-3 justify-center items-center">
                                <svg className=" cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 7.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                                    <path d="M3.75 12H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                                    <path d="M3.75 16.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                                </svg>
                                <p className=" font-normal text-base leading-4 text-gray-800">Filter</p>
                            </div>
                            <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing {products?.length} products</p>
                        </div>

                        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                            {products?.map((itm: ProductInterface) => (

                                <ProductCard title={itm.title} id={itm.id} description={itm.description} category={itm.category} image={itm.image} rating={itm.rating} price={itm.price} />

                            ))}


                            {/* <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard /> */}
                        </div>

                        {/* <div className=" flex justify-center items-center">
                            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                        </div> */}
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
