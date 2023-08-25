import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

const MainStyled=styled.div`
    min-height:var(--main-min-height);
    background-color: var(--body-color-bg);
    // margin-top:var(--header-h);
    padding-top:var(--main-padding-top);
    box-sizing:border-box;
    >div{
        margin: auto;
    }
`

const Main=props=>{
    return(
        <MainStyled>
            
            <Outlet/>
        </MainStyled>
    )
}

export default Main