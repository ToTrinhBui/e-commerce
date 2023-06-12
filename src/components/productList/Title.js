import React from "react";

export default function Title(props){
    return(
        <div className="title container">
            <h2>Category: {props.title}</h2>
        </div>
    )
}