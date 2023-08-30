import React from "react";
import { styled } from "styled-components";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

const WrapperStyled=styled.div`
    // margin-left:var(--side-bar-w)
    transition: margin 600ms cubic-bezier(0.23, 1, 0.320, 1);
    position:relative;
    background-color: var(--body-color-bg)
`

const Wrapper=props=>{
    const sideBarIsOpen=useSelector(state=>state.view.sideBarIsOpen);
    // console.log(sideBarIsOpen);
    return(

        <WrapperStyled className={`${sideBarIsOpen?'ml-sidebar-open':''} `}>
            <Header/>
            <Main/>
            <Footer/>
        </WrapperStyled>
    )
}

export default Wrapper