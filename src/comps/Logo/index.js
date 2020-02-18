import React from 'react';

function Logo({color, justifycontent, marginbottom, margintop}){

    return(
        <div className="logo_container" style={{color:color, justifyContent:justifycontent, marginBottom:marginbottom, marginTop:margintop}}>
            easemble
        </div>
    )
}

Logo.defaultProps = {
    color:'black',
    justifycontent:'left',
    marginbottom:0,
    marginTop:0
};

export default Logo;