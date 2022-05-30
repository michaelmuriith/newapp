import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <h1>Latest News</h1>
        <div className="chips">
            <div className="chip">
                <p>politics</p>
            </div>
            <div className="chip">
                <p>Business</p>
            </div>
            <div className="chip">
                <p>Tech</p>
            </div>
            <div className="chip">
                <p>Arts</p>
            </div>
            <div className="chip">
                <p>Science</p>
            </div>
            <div className="chip">
                <p>Health</p>
            </div>
            <div className="chip">
                <p>Sports</p>
            </div>   
        </div>
    </div>
  )
}

export default Header