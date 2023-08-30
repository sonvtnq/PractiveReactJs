import { Link } from "react-router-dom"

const Dashboard=()=>{
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p>Header</p>
                    <Link to='https://www.youtube.com' target="_blank">Youtube</Link>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard