import React from 'react';

const AppHeader=(props)=>{
    console.log('args',props); 
    let headerStyle={
        height:"50px",
        borderBottom:"1px solid gray",
        marginBottom:"10px",
        paddingTop:10,
        margin:0
    };
    if(props.theme==='dark')
    {
        headerStyle.backgroundColor='lightpink'
        headerStyle.color='black'
    }
    return <h1 style={headerStyle}>{props.title}</h1>
};
export default AppHeader;