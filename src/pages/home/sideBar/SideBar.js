import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { MdOutlineWaterDrop } from "react-icons/md"
import SidebarNavItems from "./sidebarNavItem/SidebarNavItems";
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
        & a{
            text-decoration:none;
            color:var(--sidebar-color);
        }
        &:hover{
            background-color:var(--sidebar-nav-items-hover-color-bg);
            color:var(--sidebar-nav-items-hover-color);
            & a{
                color:var(--sidebar-nav-items-hover-color);
            }
        }
        .badge{
            top:50%;
            right:30px;
            transform:translateY(-50%);
            color:#fff;
            display:block;
            border-radius:8px;
            padding:.25rem .5rem;
            font-weight:700;
            font-size:.9rem;
            &.new{
                background-color: #3399ff;
            }
            &.pro{
                background-color: #e55353;
            }
        }
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
                    icon={<MdOutlineWaterDrop fontSize='2rem'/>}
                    name='Colors'
                    badge='new'
                    linkTo=''
                    className=''
                />
                <SidebarNavItems 
                    icon={<MdOutlineWaterDrop fontSize='2rem'/>}
                    name='Colors'
                    badge='pro'
                />
            </ul>
            <div className="sidebar-toggle">

            </div>
        </SideBarStyled>
    )
}

export default SideBar