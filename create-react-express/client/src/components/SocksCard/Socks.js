import React from "react";
import "./Socks.css";



const Socks = (props) => (
   
        <div>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Leave a Nice Comment!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="input-group input-group-sm mb-3">
                        <input type="text" name="comment" placeholder="Comment" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={props.commentID}>Submit Comment!</button>
                    </div>
                </div>
            </div>
        </div>
            {props.socks.map((sock, index)=>(
                <div className="card w-75 mt-5 mb-5">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={sock.url} className="img-fluid" alt={index} height="150px" width="200px" />
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h1 className="card-title ml-2 mt-3">{sock.title}</h1>
                                <button href= "/nowhere" onClick={() => props.deleteSocks(sock._id)} className=" ml-2 btn">Delete</button>
                                <button className="btn ml-2" value={sock._id} onClick={props.commentIDer} type="button" data-toggle="modal" data-target="#exampleModal">Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer w-100 text-muted accordion">
                    <div className="row">
                        <div className="col-md">
                            <p>{sock.created}</p>
                        </div>
                        <div className="col-md">
                            <div className="btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapseOne"+index}>
                                View Comments
                            </div>
                        </div>
                    </div>
                    <div id={"collapse"+index} className="collapse" aria-labelledby="headingOne" data-parent="accordion">
                           {sock.comments.map((comment) =>(
                            <div className="card-body">
                                <hr />
                                <h3 className="mt-5 mb-1">{comment.comment}</h3>
                               
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
        ))}
</div>
        
    
)

export default Socks;