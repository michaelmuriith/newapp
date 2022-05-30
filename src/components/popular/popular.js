import React from 'react'
import { Link } from 'react-router-dom'

import './popular.css'

const PopularNews = () => {
  return (
    <div className="popular">
        <h3>Popular Sports</h3>
        <ol>
            <div className="popular_link">
                <li>
                    <Link to='/'>
                        <h4>Former City captain Kompany in talks over Burnley manager’s job</h4>
                        <p>Sports</p>
                    </Link>
                </li>
                <hr />
            </div>
            <div className="popular_link">
                <li>
                    <Link to='/'>
                        <h4>Former City captain Kompany in talks over Burnley manager’s job</h4>
                        <p>Sports</p>
                    </Link>
                </li>
                <hr />
            </div>
        </ol>
    </div>
  )
}

export default PopularNews
