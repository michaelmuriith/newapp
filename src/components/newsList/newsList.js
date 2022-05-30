import React from 'react';
import { Link } from 'react-router-dom';
import './newsList.css';

const NewsList = () => {
  return (
    <div className="newsList">
        <div className="newsArticle">
            <img src="./assets/news/mudavadi.png" alt="mudavadi" />
            <div className="details">
                <h3>Mudavadi tells off State over 'political harassment'</h3>
                <p>
                    Leaders of the Kenya Kwanza Alliance have asked 
                    the Government to stop intimidation tactics on 
                    top members of the alliance and parties ahead of 
                    the August 9, elections. Reacting a day after 
                    the police announced...
                    <span>
                        <Link to='/article'>Read more</Link>
                    </span>
                </p>
                <div>
                    <h5>by: Brian Oruta</h5>
                    <small>2hrs ago</small>
                </div>
            </div>
        </div>
        <div className="newsArticle">
            <img src="./assets/news/mudavadi.png" alt="mudavadi" />
            <div className="details">
                <h3>Mudavadi tells off State over 'political harassment'</h3>
                <p>
                    Leaders of the Kenya Kwanza Alliance have asked 
                    the Government to stop intimidation tactics on 
                    top members of the alliance and parties ahead of 
                    the August 9, elections. Reacting a day after 
                    the police announced...
                    <span>
                        <Link to='/'>Read more</Link>
                    </span>
                </p>
                <div>
                    <h5>by: Brian Oruta</h5>
                    <small>2hrs ago</small>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default NewsList