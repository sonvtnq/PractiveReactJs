import { Link } from "react-router-dom"
// import "./Card.css"

const Card=props=>{
    return(
        <div className="card">
            {
                // props.header &&
                <div className="card-header">
                    <p>{props.headerContent} abc</p>
                    <Link to="https://facebook.com">Hihi</Link>
                </div>
            }
            {
                // props.body &&
                <div className="card-body">

                </div>
            }
            {
                props.footer &&
                <div className="card-footer">

                </div>
            }
        </div>
    )
}

export default Card