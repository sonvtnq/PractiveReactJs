import React from "react";
import { styled } from "styled-components";
import {RxHamburgerMenu} from "react-icons/rx"
import {BiBell} from "react-icons/bi"
import {BsListTask,BsMoon} from "react-icons/bs"
import {HiOutlineMailOpen , HiAdjustments} from "react-icons/hi"
import {MdOutlineLightMode} from "react-icons/md"
import { Link } from "react-router-dom";

const HeaderStyled=styled.div`
    color:var(--body-color);
    background-color:var(--header-color-bg);
    height:var(--header-h);
    width:100%;
    border-bottom:1px solid var(--border-color);
    padding:.5rem;
    box-sizing: border-box;
    font-size:1.1rem;
    .header-row{
        width:100%;
        padding: 0 1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-sizing: border-box;
    }
    .header-row1{
        width:100%;
        height:3rem;
        // border:1px solid red;
    }
    .header-row2{
        width:100%;
        height:2rem;
    }
    >.seperate{
        border-top:1px solid var(--border-color);
        width:150%;
        transform:translateX(-.5rem);
        margin:.5rem 0;
    }
    .icon-menu{
        margin-right:1rem;
        display:flex;
        align-items:center;
    }
    .header-nav{
        display:flex;
        list-style:none;
    }
    .nav-item{
        padding: 0 .5rem;
        >.nav-link{
            text-decoration: none;
            color:var(--body-color);
            &.active{
                color:var(--link-active-color);
                // font-weight:500;
            }
        }
        .seperate{
            border-right:1px solid var(--nav-item-seperate);
            height:130%;
            transform:translateY(-15%)
        }
    }
    .avata{
        border-radius:50%;
        overflow:hidden;
    }
`
const Header=props=>{
    return(
        <HeaderStyled>
            <div className="header-row header-row1">
                <div className="icon-menu">
                    <RxHamburgerMenu fontSize='1.5rem'/>
                </div>
                <ul className="header-nav mr-auto">
                    <li className="nav-item">
                        <Link to='#/dashboard' className="nav-link active">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link">Settings</Link>
                    </li>
                </ul>
                <ul className="header-nav">
                    <li className="nav-item pos-relative">
                        <Link to='#' className="nav-link">
                            <BiBell color="var(--body-color)" fontSize="1.3rem"/>
                        </Link>
                    </li>
                    <li className="nav-item pos-relative">
                        <Link to='#' className="nav-link">
                            <BsListTask color="var(--body-color)" fontSize="1.3rem"/>
                        </Link>
                    </li>
                    <li className="nav-item pos-relative">
                        <Link to='#' className="nav-link">
                            <HiOutlineMailOpen color="var(--body-color)" fontSize="1.3rem"/>
                        </Link>
                    </li>
                    <li className="nav-item pos-relative">
                        <div className="seperate"></div>
                    </li>
                    <li className="nav-item pos-relative">
                        <Link to='#' className="nav-link d-none">
                            <BsMoon color="var(--body-color)" fontSize="1.3rem"/>
                        </Link>
                        <Link to='#' className="nav-link">
                            <MdOutlineLightMode color="var(--body-color)" fontSize="1.3rem"/>
                        </Link>
                    </li>
                    <li className="nav-item pos-relative">
                        <div className="seperate"></div>
                    </li>
                </ul>
                <ul className="header-nav h-80 pl-2">
                    <li className="nav-item pos-relative h-100">
                        <Link className="avata nav-link h-100">
                            <div className="avata img h-100">
                                <img src="/meoAI.png"/>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className="header-toggler pl-2 mr-2">
                    <HiAdjustments color="var(--body-color)" fontSize="1.5rem"/>
                </div>
            </div>
            <div className="seperate"></div>
            <div className="header-row header-row2">
                <p>Home / Dashboard</p>
            </div>
        </HeaderStyled>
    )
}

export default Header