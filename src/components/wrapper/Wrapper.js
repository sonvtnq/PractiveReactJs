import React from "react";
import { styled } from "styled-components";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

const WrapperStyled=styled.div`
    margin-left:var(--side-bar-w)
`

const Wrapper=props=>{
    return(
        <WrapperStyled>
            <Header/>
            <Main/>
            <Footer/>
        </WrapperStyled>
    )
}

export default Wrapper