import React from "react";



const Socks = (props) => (
<div>
    {props.socks.map((sock, index)=>(
        <div className="card w-75 mt-5 mb-5">
            <div className="row no-gutters">
            <div className="col-auto">
                <img src={sock.url} className="img-fluid" alt={index} height="150px" width="200px" />
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h1 className="card-title ml-2 mt-5">{sock.title}</h1>
                    <button href= "/nowhere" onClick={() => props.deleteSocks(sock._id)} className=" ml-2 btn btn-success">Delete</button>
                </div>
            </div>
        </div>
        <div className="card-footer w-100 text-muted">
            {sock.created}
        </div>
    </div>
        ))}
</div>
)

export default Socks;