import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
      <nav>
        <ul className="nav">
          <li className="navItem"><Link to='/'>Home</Link></li>
        </ul>
      </nav>
  )
}