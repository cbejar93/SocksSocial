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
                        <input type="text" id="comment" name="comment" placeholder="Comment" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={props.commentID}>Submit Comment!</button>
                    </div>
                </div>
            </div>
        </div>
            {props.socks.map((sock, index)=>(
                <div key={sock._id} className="card w-75 mt-5 mb-5">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={sock.url} className="img-fluid" alt={index} height="150px" width="200px" />
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h1 className="card-title ml-2 mt-3">{sock.title}</h1>
                                <button href= "/nowhere" onClick={() => props.deleteSocks(sock._id)} className=" ml-2 btn">Delete</button>
                                <button className="btn ml-2" value={sock._id} onClick={props.commentIDer} type="button" data-toggle="modal" data-target="#exampleModal">Comment</button>
                                <h5 className="ml-2 mt-3">{sock.user}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer w-100 text-muted accordion">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <p>{sock.created}</p>
                        </div>
                        <div className="col-md">
                            <p className="what" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapseOne"+index}>
                                View Comments
                            </p>
                        </div>
                        <div className="col-md"  id={"vote-up-"+index}>
                            <button type="submit" className="btn btn-primary" onClick={props.voteUp} value={sock._id}>Would Wear</button>
                        </div>
                        <div className= "col-md d-flex justify-content-center">
                            <h2>{sock.voteScore}</h2>
                        </div>
                        <div className="col-md">
                        <button type="submit" className="btn btn-primary" onClick={props.voteDown} value={sock._id}>Would NOT Wear</button>
                        </div>
                        
                    </div>
                    <div id={"collapse"+index}  className="collapse" aria-labelledby="headingOne" data-parent="accordion">
                           {sock.comments.length > 0 ?  sock.comments.map((comment, index) =>(
                            <div className ="card-body align-items-center" key={comment._id}>
                                <hr />
                                <p>{comment.user}</p>
                                <h3 className="mb-1">{comment.comment}</h3>
                               
                            </div>
                            
                            ))
                        :   <div className ="card-body align-items-center">
                                <hr />
                                <h3 className="mt-5 mb-1">Leave a Comment!</h3>
                       
                            </div>
                        }
                        </div>
                    </div>
                </div>
        ))}
</div>
        
    
)

export default Socks;