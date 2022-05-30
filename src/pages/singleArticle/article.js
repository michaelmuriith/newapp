import React from 'react';
import { Link } from 'react-router-dom';
import PopularNews from '../../components/popular/popular';
import './article.css';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaPinterestP } from 'react-icons/fa';

function Article() {
  return (
    <div className="article">
        <div className="subscribe">
          <div className="author">
            <img src="./assets/users/user1.png" alt="author" srcset="" />
            <p>
              <span>Brian Oruta</span>
              <small>Digital Journalist</small>
            </p>
          </div>
          <div className="sub">
            <ol>
              <li>
                <Link className="social_Link" to='/'>
                  <FaFacebookF />
                </Link>              
              </li>
              <li>
                <Link className="social_Link" to='/'>
                  <FaWhatsapp />
                </Link>              
              </li>
              <li>
                <Link className="social_Link" to='/'>
                  <FaTwitter />
                </Link>              
              </li>
              <li>
                <Link className="social_Link" to='/'>
                  <FaPinterestP />
                </Link>              
              </li>                 

            </ol>

          </div>
        </div>
        <div className="mainArt">
            <h2>Mudavadi tells off State over 'political harassment'</h2>
            <h4>In Summarry</h4>
            <ul>
              <li>Led by ANC Party Leader Musalia Mudavadi, the leaders who were on a campaign trail in the Western region asked the Government to first withdraw State vehicles assigned to Azimio presidential candidate Raila Odinga.</li>
              <li>At the same time, Mudavadi called on the Government to stop using its security officers to harass members of the alliance.</li>
            </ul>
            <img src="./assets/news/mudavadi.png" alt="mudavadi" />
            <p>
              Leaders of the Kenya Kwanza Alliance have asked the 
              Government to stop intimidation tactics on top members 
              of the alliance and parties ahead of the August 9, 
              elections.
            </p>

            <p>
              Reacting a day after the police announced that they were 
              in pursuit of Kimilili MP Didmas Barasa on claims of 
              using CDF vehicles for his campaigns, the leaders 
              vowed to resist any intimidation threats targeting 
              the alliance leaders.
            </p>

            <img src="./assets/news/mudavadi.png" alt="mudavadi" />
            
            <p>
              Led by ANC Party Leader Musalia Mudavadi, the leaders 
              who were on a campaign trail in the Western region 
              asked the Government to first withdraw State vehicles 
              assigned to Azimio presidential candidate Raila Odinga.
            </p>
        </div>
        <div className="sideBar">
          <PopularNews />
        </div>
    </div>
  )
}

export default Article
