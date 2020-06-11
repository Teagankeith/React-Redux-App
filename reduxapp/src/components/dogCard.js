import React from "react"


 const DogCard = props => {
    return (
        <div className="dog-card">
        <img src={props.message} alt=""/>
        <button>Get a dog!</button>
        </div>
    )
}

export default DogCard