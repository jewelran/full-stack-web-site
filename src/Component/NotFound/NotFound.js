import React from 'react';
import notFoundImages from '../../images/notFound.gif'
const NotFound = () => {
    return (
        <div style = {{textAlign:"center", padding:"10rem"}}>
            <h5>Page note found</h5>
            <p>Please try again later</p>
            <p>Error code 400</p>
            <img style ={{height:"200px"}} src={notFoundImages} alt="" />
        </div>
    );
};

export default NotFound;