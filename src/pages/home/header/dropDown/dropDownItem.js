import React from "react"
const DropdownItem=props=>{
    return (
        <>{
            props.action.map((item, index) => (
                <React.Fragment key={index}>
                    <li className="dropdown-item dropdown-head">
                        {item.title}
                    </li>
                    {
                        item.list.map((item2, index2) => (
                            <li key={index2} className="dropdown-item">
                                {item2.toString()}
                                {/* {console.log(item2)} */}
                            </li>
                        ))
                    }
                    {
                        item.footer && <li className="dropdown-item dropdown-footer">
                                {item.footer}
                            </li>
                    }
                </React.Fragment>
            ))
        }</>
    )
}
export default DropdownItem