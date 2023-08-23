import React from "react";
import { styled } from "styled-components";

const MainStyled=styled.div`
    min-height:var(--main-min-height);
    background-color: var(--body-color-bg);
    // margin-top:var(--header-h);
`

const Main=props=>{
    return(
        <MainStyled>
            {/* <div className="test"></div> */}
        </MainStyled>
    )
}

export default Main