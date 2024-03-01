import React from 'react'
import Footer from '../Footer/Footer'

const AboutPage = () => {
  return (
    <div style={{ marginTop: '130px', marginBottom: '230px', marginLeft: '130px',marginRight: '130px' }}>
      <h1 style={{ fontSize: '50px', color: 'white' }}>About Me.</h1>
      <p style={{
        fontSize: '20px', color: 'white',
        fontFamily: "Permanent Marker",
        fontWeight: '400',
        fontStyle: 'normal'
      }}>I'm a passionate and results-driven web developer with a proven track record of designing and developing cutting-edge web solutions. With a strong foundation in front-end and back-end development technologies, I specialize in crafting responsive, mobile-friendly websites that meet the unique needs of clients across diverse industries. I excel in turning ideas into reality, working closely with cross-functional teams to ensure that projects are delivered on time.<br/>
        My expertise includes proficiency in HTML, CSS, JavaScript, React, Wordpress. I also have experience in SEO rankings. I am a continuous learner, always staying up-to-date with the latest industry trends and best practices to deliver the most innovative.</p>
        <Footer />
    
    </div>
  )
}

export default AboutPage

