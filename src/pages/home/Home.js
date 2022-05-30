import React from 'react'
import Header from '../../components/header/header'
import { LeftSidebar } from '../../components/leftSidebar/leftSidebar'
import MidSidebar from '../../components/midSidebar/midSidebar'
import RightSidebar from '../../components/rightSidebar/rightSidebar'

import './home.css';

function Home() {
  return (
    <div className='home'>
        <Header />
        <div className="main">
            <LeftSidebar />
            <MidSidebar />
            <RightSidebar />
        </div>
    </div>
  )
}

export default Home