import React from 'react'
import Header from '../../components/Header/Header'
import Community from '../../components/Community/Community'
import Companies from '../../components/Companies/Companies'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Community />
      <Companies />
    </div>
  )
}

export default Home
