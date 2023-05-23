import React ,{ ReactNode }from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface WrapperProps {
    children: ReactNode;
  }

const Wrapper = ({ children }:WrapperProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}

export default Wrapper