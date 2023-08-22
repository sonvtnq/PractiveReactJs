import React from "react";
import { styled } from "styled-components";
const SideBarStyled=styled.div`
    // border:1px solid red;
    border-right:1px solid var(--border-color);
    background-color: #323a49;
    position:-webkit-fixed;
    position: fixed;
    top:0;
    left:0;
    width:var(--side-bar-w);
    height:100vh;
`

const SideBar=props=>{
    return(
        <SideBarStyled>
            
        </SideBarStyled>
    )
}

export default SideBar