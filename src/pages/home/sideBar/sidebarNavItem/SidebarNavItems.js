import { Link, NavLink } from "react-router-dom"
import {RiArrowDownSLine} from "react-icons/ri"
import React, { useEffect, useState } from "react"

const SidebarNavItems=props=>{
    const [navOpen,setNavOpen]=useState(false)
    const _onClick=()=>{
        if(props.multi){
            setNavOpen(!navOpen)
        }
    }
    
    return(
        <li className={`${props.className} ${props.multi && navOpen?'show':''} w-100 sidebar-nav-items w-100 border-box`} >
            <NavLink to={props.linkTo&&props.linkTo!='none'?props.linkTo:'#'}  
                className={`center jus-start h-60px w-100 border-box pos-relative ${!props.linkTo || props.linkTo=='none'?'multi':''}`}
                onClick={_onClick}
            >
                <div className="img mr-2 w-32px">
                    {props.icon}
                </div>
                {props.name}
                {
                    props.multi && 
                    <div className={`${navOpen?'upside-down':''} multiple ml-auto center`} >
                        <RiArrowDownSLine color="var(--sidebar-color" fontSize="1.5rem"/>
                    </div>
                }
            </NavLink>
            {
                props.listItem&&
                <ul className={` item-nav`} 
                    style={{
                        height:`${navOpen?`${props.listItem.length * 60}px`:'0'}`,
                    }}
                >
                {
                    props.listItem.map((item,index)=>{
                        return <React.Fragment key={index}>{item}</React.Fragment>
                    })
                }
                </ul>
            }
            {
                // console.log(props.linkTo)&&
                (props.badgeNew && 
                <div className={`new badge pos-absolute`}>
                    <p className="center line-height-1">{props.badgeNew.toUpperCase()}</p>
                </div>)
                ||
                (
                    props.badgePro && 
                    <div className={`pro badge pos-absolute`}>
                        <p className="center line-height-1">{props.badgePro.toUpperCase()}</p>
                    </div>
                )
                ||
                (
                    props.badgeFree && 
                    <div className={`free badge pos-absolute`}>
                        <p className="center line-height-1">{props.badgeFree.toUpperCase()}</p>
                    </div>
                )
            }
            
        </li>
    )
}
export default SidebarNavItems