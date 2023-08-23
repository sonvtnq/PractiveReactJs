import { Link } from "react-router-dom"

const SidebarNavItems=props=>{
    return(
        <li className={`${props.className} sidebar-nav-items d-flex align-items-center w-100 p-2-3 border-box pos-relative`}>
            <div className="img mr-2">
                {props.icon}
            </div>
            <Link to={props.linkTo}>{props.name}</Link>
            {
                props.badge && 
                <div className={`${props.badge} badge pos-absolute`}>
                    <p className="center line-height-1">{props.badge.toUpperCase()}</p>
                </div>
            }
        </li>
    )
}
export default SidebarNavItems