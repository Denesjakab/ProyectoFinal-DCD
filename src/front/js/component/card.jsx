import React from "react";
import ReactDOM from "react-dom";


export const Card = (props) => {

    return(
        
        <div className="card text-white bg-dark " style={{width: "18rem"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..."/>
                     <div className="card-body">
                         <h5 className="card-title text-warning">{props.title}</h5>
                         <hr class="my-4"></hr>
                            <p className="card-text">{props.description}</p>
                        <div className=" text-warning fst-italic"><p>{props.text}</p></div> 
                     </div>
                </div>
    )

}

