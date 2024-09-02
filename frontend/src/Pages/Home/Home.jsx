import React from 'react'
import Header from '../../components/Header/Header'
import Community from '../../components/Community/Community'
import Companies from '../../components/Companies/Companies'
import Selected_Students from '../../components/Selected_Students/Selected_Students'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Community />
      <Companies />
      <Selected_Students />
    </div>
  )
}

export default Home
