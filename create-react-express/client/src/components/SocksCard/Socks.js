import React from "react";



const Socks = (props) => (
<div>
    {props.socks.map((sock, index)=>(
        <div className="card w-75 mt-5 mb-5">
            <div className="row no-gutters">
            <div className="col-auto">
                <img src={sock.url} class="img-fluid" alt={index} height="150px" width="150px" />
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h3 className="card-title">{sock.title}</h3>
                    <a href="/nowhere" value={sock._id} class="btn btn-primary">Delete</a>
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