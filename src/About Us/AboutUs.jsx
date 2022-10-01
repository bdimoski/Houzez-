import React from 'react'

import AboutUsTitle from './About Us Title/AboutUsTitle'
import BlogPosts from './Blog Posts/BlogPosts'
import MeetOurTeam from './Meet Our Team/MeetOurTeam'
import Services from './Services Section/Services'
import YourVision from './Your vision/YourVision'

const AboutUs = () => {
  return (
    <div className=''>
        <AboutUsTitle />
        <YourVision />
        <MeetOurTeam />
        <Services />
        <BlogPosts />
    </div>
  )
}

export default AboutUs