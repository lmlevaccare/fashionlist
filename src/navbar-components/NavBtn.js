

import "../index.css"
import React from 'react'
import { Link } from "react-router-dom";

export function NavBtn() {
    return (
        <Link to='account'>
            
            <button className="btnNav">Sign.Up</button>
      </Link>
    )
}
export default NavBtn