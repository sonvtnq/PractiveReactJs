import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx"
import { BiBell } from "react-icons/bi"
import { BsCircleHalf, BsListTask, BsMoon } from "react-icons/bs"
import { HiOutlineMailOpen, HiAdjustments } from "react-icons/hi"
import { MdOutlineLightMode } from "react-icons/md"
import {HiOutlineLanguage} from "react-icons/hi2"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import viewActions from "../../../redux/actions/viewActions"
import DropdownItem from "./dropDown/dropDownItem";
import notifications from "../../../data/notifications";
import pendingTask from "../../../data/pendingTask";
import Lang from "../../../language/languages";

const HeaderStyled = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top:0;
    z-index:100;
    color:var(--body-color);
    background-color:var(--header-color-bg);
    height:var(--header-h);
    width:100%;
    border:1px solid var(--border-color);
    padding:.5rem;
    box-sizing: border-box;
    font-size:1.1rem;
    // margin-bottom: var(--header-margin-bottom);
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
        position:relative;
        padding: 0 .5rem;
        display:flex;
        align-items:center;
        justify-content:center;
        >.nav-link{
            text-decoration: none;
            color:var(--body-color);
            display:flex;
            align-items:center;
            justify-content:center;

            &.active{
                color:var(--link-active-color);
                // font-weight:500;
            }
        }
        .seperate{
            border-right:1px solid var(--nav-item-seperate);
            height:130%;
            // transform:translateY(-15%);
        }
    }
    .dropdown-menu{
        position:absolute;
        right:0;
        top:120%;
        display:none;
        list-style:none;
        border:1px solid var(--border-color);
        border-radius:8px;
        background-color:var(--dropdown-color-bg);
        z-index:2;
        width:200px;
        overflow:hidden;
        box-sizing:border-box;
        &.show{
            display: block;
        }
        & .dropdown-head{
            background-color:var(--dropdown-head-color-bg);
            font-weight:600;
            color:var(--dropdown-head-color);
        }
        & .dropdown-footer{
            text-align:center;
            font-weight:700;
            border-top:1px solid var(--border-color)
        }
    }
    .dropdown-item{
        // border-top:1px solid 
        width:100%;
        padding:.25rem .5rem;
        box-sizing:border-box;
        &:hover{
            background-color: var(--dropdown-hover-color-bg);
        }
        &.active ,&:active{
            background-color:var(--dropdown-item-active);
            color:#fff;
        }
    }
    .change-mode{
        display:flex;
        flex-decoration:column;
        >.nav-link{
            display:none;
            &.show{
                display:block;
            }
        }
    }
    .avata{
        border-radius:50%;
        overflow:hidden;
    }
`
const Header = props => {
    const [showMode, setShowMode] = useState('light');
    const [language, setLanguage] = useState('en');
    const [showChangeModeOpt, setShowChangeModeOpt] = useState(false);
    const [showNotify,setShowNotify]=useState(false);
    const [showTasks,setShowTasks]=useState(false)
    const [showChangeLanguage, setShowChangeLanguage] = useState(false);
    const dispatch = useDispatch();
    
    const _clickMenuIcon = () => {
        dispatch(viewActions.sideBar())
    }
    const _setShowMode = value => {
        setShowMode(value)
        dispatch(viewActions.viewMode(value))
    }
    const _setLanguage=(value) =>{
        dispatch(viewActions.viewLanguage(value))
        // console.log(dispatch(viewActions.viewLanguage(value)));
    }

    const setHide = () => {
        setShowChangeModeOpt(false)
        setShowNotify(false)
        setShowTasks(false)
        setShowChangeLanguage(false)
    }
    const _showChangeModeOpt = () => {
        setHide()
        setShowChangeModeOpt(!showChangeModeOpt)
    }
    const _showNotify=()=>{
        setHide()
        setShowNotify(!showNotify)
    }
    const _showTask=()=>{
        setHide()
        setShowTasks(!showTasks)
    }
    const _showChangeLanguage=()=>{
        setHide()
        setShowChangeLanguage(!showChangeLanguage)
    }

    return (
        <HeaderStyled>
            <div className="header-row header-row1">
                <div className="icon-menu cursor-pointer" onClick={_clickMenuIcon}>
                    <RxHamburgerMenu fontSize='1.5rem' />
                </div>
                <ul className="header-nav mr-auto">
                    <li className="nav-item">
                        <Link to='#/dashboard' className="nav-link active">{Lang().header_dashboard}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link">{Lang().header_user}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link">{Lang().header_settings}</Link>
                    </li>
                </ul>
                <ul className="header-nav">
                    <li className="nav-item pos-relative" onClick={_showNotify}>
                        <Link to='#' className="nav-link">
                            <BiBell color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <ul className={`dropdown-menu pb-1 ${showNotify?'show':''}`}>
                            <DropdownItem action={notifications} />
                        </ul>
                    </li>
                    <li className="nav-item pos-relative" onClick={_showTask}>
                        <Link to='#' className="nav-link">
                            <BsListTask color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <ul className={`dropdown-menu pb-1 ${showTasks?'show':''}`}>
                            <DropdownItem action={pendingTask}/>
                        </ul>
                    </li>
                    <li className="nav-item pos-relative">
                        <Link to='#' className="nav-link">
                            <HiOutlineMailOpen color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <ul className="dropdown-menu pb-1">
                            {/* <DropdownItem action={notifications}/> */}
                        </ul>
                    </li>
                    <li className="nav-item pos-relative">
                        <div className="seperate"></div>
                    </li>
                    <li className="nav-item pos-relative change-mode" onClick={_showChangeModeOpt}>
                        <Link to='#' className={showMode == 'dark' ? 'nav-link show' : 'nav-link'}>
                            <BsMoon color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <Link to='#' className={showMode == 'light' ? 'nav-link show' : 'nav-link'}>
                            <MdOutlineLightMode color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <Link to='#' className={showMode == 'auto' ? 'nav-link show' : 'nav-link'}>
                            <BsCircleHalf color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <ul className={`dropdown-menu pt-1 pb-1 w-auto ${showChangeModeOpt ? 'show' : ''}`}>
                            <li className={`dropdown-item d-flex w-160px cursor-pointer ${showMode == 'light' ? 'active' : ''}`} onClick={() => _setShowMode('light')}>
                                <div className="padding-0-1 d-flex align-items-center">
                                    <MdOutlineLightMode color={showMode == 'light' ? '#fff' : 'var(--body-color)'} fontSize="1.3rem" />
                                </div>
                                <p>{Lang().mode_light}</p>
                            </li>
                            <li className={`dropdown-item d-flex w-160px cursor-pointer ${showMode == 'dark' ? 'active' : ''}`} onClick={() => _setShowMode('dark')} >
                                <div className="padding-0-1">
                                    <BsMoon color={showMode == 'dark' ? '#fff' : 'var(--body-color)'} fontSize="1.3rem" />
                                </div>
                                <p>{Lang().mode_dark}</p>
                            </li>
                            <li className={`dropdown-item d-flex w-160px cursor-pointer ${showMode == 'auto' ? 'active' : ''}`} onClick={() => _setShowMode('auto')}>
                                <div className="padding-0-1">
                                    <BsCircleHalf color={showMode == 'auto' ? '#fff' : 'var(--body-color)'} fontSize="1.3rem" />
                                </div>
                                <p>{Lang().mode_auto}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item pos-relative" onClick={_showChangeLanguage}>
                        <Link to='#' className="nav-link">
                            <HiOutlineLanguage color="var(--body-color)" fontSize="1.3rem" />
                        </Link>
                        <ul className={`dropdown-menu pt-1 pb-1 w-auto ${showChangeLanguage?'show':''}`}>
                            <li className={`dropdown-item d-flex cursor-pointer w-140px center jus-between`} onClick={()=>_setLanguage('en')}>
                                English
                                <div className="flag img center h-25px">
                                    <img src="/languages/flags/en.jpg"/>
                                </div>
                            </li>
                            <li className={`dropdown-item d-flex cursor-pointer w-140px center jus-between`} onClick={()=>_setLanguage('vi')}>
                                Tiếng Việt
                                <div className="flag img center h-25px">
                                    <img src="/languages/flags/vi.png"/>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item pos-relative">
                        <div className="seperate"></div>
                    </li>
                </ul>
                <ul className="header-nav h-80 pl-2">
                    <li className="nav-item pos-relative h-100">
                        <Link className="avata nav-link h-100">
                            <div className="avata img h-100">
                                <img src="/meoAI.png" />
                            </div>
                        </Link>
                        <ul className="dropdown-menu">

                        </ul>
                    </li>
                </ul>
                <div className="header-toggler pl-2 mr-2 cursor-pointer">
                    <HiAdjustments color="var(--body-color)" fontSize="1.5rem" />
                </div>
            </div>
            <div className="seperate"></div>
            <div className="header-row header-row2">
                <p>{Lang().home} / {Lang().header_dashboard}</p>
            </div>
        </HeaderStyled>
    )
}

export default Header