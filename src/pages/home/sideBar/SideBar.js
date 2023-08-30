import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { MdOutlineWaterDrop } from "react-icons/md"
import { TfiDashboard } from "react-icons/tfi"
import { AiOutlineStar } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import SidebarNavItems from "./sidebarNavItem/SidebarNavItems";
import Lang from "../../../language/languages";
const SideBarStyled=styled.div`
    // border:1px solid red;
    color:var(--sidebar-color);
    border-right:1px solid var(--border-color);
    background-color: #323a49;
    position:-webkit-fixed;
    position: fixed;
    top:0;
    left:0;
    width:var(--side-bar-w);
    height:100vh;
    transition: transform 600ms cubic-bezier(0.23, 1, 0.320, 1);
    &.close{
        transform:translateX(calc(-1 * var(--side-bar-w)) );
    }
    .sidebar-brand{
        position:sticky;
        top:0;
        left:0;
        height:var(--sidebar-brand-height);
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:var(--sidebar-color-bg);
    }
    .sidebar-toggle{
        position:sticky;
        bottom:0;
        left:0;
        height:var(--sidebar-toggle-height);
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:var(--sidebar-color-bg);
    }
    .sidebar-nav{
        min-height: var(--sidebar-nav-height);
        max-height:var(--sidebar-nav-height);
        overflow:auto;
    }
    .sidebar-nav-items{
        color:var(--sidebar-color);
        position:relative;
           
        & a{
            padding:.75rem 1rem;
            text-decoration:none;
            color:var(--sidebar-color);
            &.active{
                background-color:var(--sidebar-nav-items-hover-color-bg);
                color:var(--sidebar-nav-items-hover-color);
                & a{
                    color:var(--sidebar-nav-items-hover-color);
                }
                &.multi-not-hover{
                    background-color: #323a49;
                    color:#ffffff99;
                    &:hover{
                        background-color: var(--sidebar-nav-items-hover-color-bg);
                        & a{
                            color:var(--sidebar-color);
                        }
                    }
                }
                &.multi-active{
                    background-color: #282e3a;
                    color:var(--sidebar-color);
                    &:hover{
                        background-color:#333944;
                        color:#ffffffde;
                    }
                }
            }
            &:hover{
                background-color:var(--sidebar-nav-items-hover-color-bg);
                color:var(--sidebar-nav-items-hover-color);
            }
        }
        .badge{
            top:30px;
            right:30px;
            transform:translateY(-50%);
            color:#fff;
            display:block;
            border-radius:6px;
            padding:.25rem .5rem;
            font-weight:700;
            font-size:.75rem;
            &.new{
                background-color: #3399ff;
            }
            &.pro{
                background-color: #e55353;
            }
            &.free{
                background-color: #2eb85c;
            }
        }
        .multiple{
            transition: transform .25s;
        }
    }
    .sidebar-nav-items.show{
        background-color:#282e3a;
        .multiple{
            // top: 15px;
        }
    }
    .item-nav{
        overflow: hidden;
        transition: height .2s ease;
        & a:hover{
            background-color:#333944;
            color:#ffffffde;
        }
        & a.active{
            background-color:#333944;
            color:#ffffffde;
        }
    }
    .sidebar-nav-item-head{
        box-sizing:border-box;
        color:var(--sidebar-color);
        margin-top:.5rem;
        padding:.5rem .75rem;
        font-weight:700;
    }
`

const SideBar=props=>{
    const sideBarIsOpen=useSelector(state=>state.view.sideBarIsOpen)

    return(
        <SideBarStyled className={sideBarIsOpen?'':'close'}>
            <div className="sidebar-brand">
                <div className="img h-70 mr-2 rotate">
                    <img src="/logo512.png"/>
                </div>
                <p>REACTJS</p>
            </div>
            <ul className="sidebar-nav scrollable-container">
                <SidebarNavItems 
                    icon={<BiUser fontSize='2rem'/>}
                    name={Lang().detail_user}
                    badgeNew={Lang().sidebar_spot_new}
                    linkTo='/detail-acount'
                    className=''
                />
                <li className={`sidebar-nav-item-head d-flex align-items-center w-100`}>
                    <p>{Lang().sidebar_head1.toUpperCase()}</p>
                </li>
                <SidebarNavItems 
                    icon={<MdOutlineWaterDrop fontSize='2rem'/>}
                    name={Lang().sidebar_nav_item_color}
                    linkTo='/color'
                    className=''
                />
                {/* <SidebarNavItems 
                    icon={<MdOutlineWaterDrop fontSize='2rem'/>}
                    name={Lang().sidebar_head1}
                    // badgeNew={Lang().sidebar_spot_new}
                    linkTo=''
                    className=''
                /> */}
                 <li className={`sidebar-nav-item-head d-flex align-items-center w-100`}>
                    <p>{Lang().sidebar_head2.toUpperCase()}</p>
                </li>
                <SidebarNavItems 
                    icon={<AiOutlineStar fontSize='2rem'/>}
                    name={Lang().sidebar_nav_item_icon}
                    // badgeNew={Lang().sidebar_spot_new}
                    linkTo='none'
                    className='test'
                    multi='true'
                    listItem={[
                        <SidebarNavItems name={Lang().header_dashboard} linkTo='/dashboard'/>,
                        <SidebarNavItems name='Colors' linkTo='/color'/>,
                        <SidebarNavItems name='test' linkTo='/#'/>,
                    ]}
                />
                <SidebarNavItems 
                    icon={<AiOutlineStar fontSize='2rem'/>}
                    name={Lang().sidebar_nav_item_icon}
                    // badgeNew={Lang().sidebar_spot_new}
                    linkTo='none'
                    className=''
                    multi='true'
                />
                
            </ul>
            <div className="sidebar-toggle">

            </div>
        </SideBarStyled>
    )
}

export default SideBar