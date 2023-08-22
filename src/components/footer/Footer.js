import React from "react";
import { styled } from "styled-components";

const FooterStyled=styled.div`
    color:var(--body-color);
    background-color:var(--body-color-bg);
    border-top:1px solid var(--border-color);
    width:100%;
    padding: .5rem;
    min-height:3rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    font-size:1.1rem;
    >div{
        display: flex;
        >span{
            color:var(--link-color);
            text-decoration:underline;
            margin: 0 .25rem;
        }
    }
`

const Footer=props=>{
    return(
        <FooterStyled>
            <div>
                <span>Link</span>
                <p>@ 2023</p>
            </div>
            <div>
                <p>Created by </p>
                <span>SonNguyen</span>
            </div>
        </FooterStyled>
    )
}

export default Footer