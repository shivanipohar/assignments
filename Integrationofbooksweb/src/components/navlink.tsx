
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

interface Props{
    name:string,
    url:string
}




export default function NavLink({name,url}: Props) {
    return (
        <div>
            <Link className="navlink" to={url}>{name}</Link>
        </div>
    )
}


//  import React, { Component } from 'react'

// import * as ReactBootStrap from "react-bootstrap";

// export default class navlink extends Component {
//     render() {
//         return (
//             <div>
                
//   <ReactBootStrap.Navbar bg="dark" variant="dark">
//     <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
//     <ReactBootStrap.Nav className="mr-auto">
//       <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Form inline>
//       <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
//     </ReactBootStrap.Form>
//   </ReactBootStrap.Navbar>
//   <br />
//   <ReactBootStrap.Navbar bg="primary" variant="dark">
//     <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
//     <ReactBootStrap.Nav className="mr-auto">
//       <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Form inline>
//       <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
//     </ReactBootStrap.Form>
//   </ReactBootStrap.Navbar>

//   <br />
//   <ReactBootStrap.Navbar bg="light" variant="light">
//     <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
//     <ReactBootStrap.Nav className="mr-auto">
//       <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Form inline>
//       <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <ReactBootStrap.Button variant="outline-primary">Search</ReactBootStrap.Button>
//     </ReactBootStrap.Form>
//  </ReactBootStrap.Navbar>

//             </div>
//         )
//     }
// }
