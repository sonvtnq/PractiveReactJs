import React, { useState } from "react";
import SideBar from "./sideBar/SideBar";
import Wrapper from "./wrapper/Wrapper";

const Home=props=>{
    return(
        <div>
            <SideBar/>
            <Wrapper />
        </div>
    )
}

export default Home