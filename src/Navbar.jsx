import React from "react";
import {Link,NavLink} from "react-router-dom"
const Navbar=(()=>{

    return(
        <div>
           
            <nav>
                <Link to='/' >Főoldal</Link>
                <NavLink to='/ermesek'>Az olimpia éremesei</NavLink>
                <Navlink to='/mermesek'>Az olimpia magyar érmesei</Navlink>
            </nav>
        </div>
    )
}
)
export default Navbar