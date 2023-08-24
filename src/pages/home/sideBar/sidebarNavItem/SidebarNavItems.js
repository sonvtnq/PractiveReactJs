import { Link } from "react-router-dom"
import {RiArrowDownSLine} from "react-icons/ri"
import React from "react"

const SidebarNavItems=props=>{
    return(
        <li className={`${props.className} d-flex center jus-start border-box sidebar-nav-items h-60px w-100 border-box pos-relative`}>
            <div className="img mr-2 w-32px">
                {props.icon}
            </div>
            <Link to={props.linkTo}>{props.name}</Link>
            {
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
                ||
                (
                    props.multi && 
                    <div className={`multiple badge pos-absolute`}>
                        <RiArrowDownSLine color="var(--sidebar-color" fontSize="1.5rem"/>
                    </div>
                )
            }
            {/* {
                props.listItem &&
                <ul className=" w-100" style={{width:'200%',border:'1px solid red'}}>
                    {
                        props.listItem.map((item,index)=>{
                            return <React.Fragment key={index}>{item}</React.Fragment>
                        })
                    }
                </ul>
            } */}
            
        </li>
    )
}
export default SidebarNavItems