import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const error = useRouteError();
    return (
        <>
        <h1>error Page</h1>
        <h2>{error.statusText || error.message}</h2>
        <p>{error.data}</p>
        
        </>
    )
}

export default Error
