import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import NavLink from "./navlink";

interface Props {}


export default function Header({}:Props) {
    
    return(
<div className="header">
<h1 className="headertitle">BOOKAPP</h1>


<div >
    <Link to="/books" >  <button  className="sea" >Books</button>&nbsp;</Link>
    <Link to='/addbooks'> <button  className="sea1" >Add Book</button>&nbsp;</Link>
    {/* < Link to='/newheader'><button   className="sea2" >Register</button>&nbsp;</Link> */}
    
      < Link to='/register'><button   className="sea2" >Register</button>&nbsp;</Link>
      <Link to='/login'> <button className="sea4">Login</button>&nbsp;</Link>
    {/* <Link to='/lheader'> <button className="sea4">Login</button>&nbsp;</Link> */}
   
    </div>

   

 </div>
     )
    
 }

    

//     return(
// <div className="header">
// <h1 className="headertitle">BOOKAPP</h1>
// <div className="navgroup">
//     {links.map(([name,url])=>(<NavLink url={url} name={name}></NavLink>))}
// </div> 
    
// </div>
//     )
// };