import React from "react";

function ErrorMessage({error}) {
    return <div>
        {error!==false ? (
            <p>NO DATA AVAILABLE</p>        
        ):(
            console.log('data fetched successfully')
        )}
    </div>
}

export default ErrorMessage