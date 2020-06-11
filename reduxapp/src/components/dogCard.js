import React from "react"
import { connect } from "react-redux"
import { getDog } from "../actions/index"


 const DogCard = props => {
   const getDogHandler= e => {
       e.preventDefault();
       props.getDog();
   }
   
    return (
       <div className="dog-card">
        {
            props.isFetchingData ? (
                <h2>Fethcing Data</h2>
            ) : (
             <>
            <img src={props.message} alt=""/>
            <button onClick={getDogHandler}>Get a dog!</button>
             </>
            )
        }
        </div>
    
    )       
}

const mapStateToProps = state => {
    return {
        message: state.message,
        isFetchingData: state.isFetchingData,
        error: state.errorMessage
    }
}


export default connect(mapStateToProps, {getDog})(DogCard)