import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <>
        <div style={{ margin: '140px',marginBottom: '200px' }}>
          <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'whitesmoke' }}>I'M Prajwal Kotagi</h1>
          <p style={{ fontSize: '25px', fontWeight: '500', color: 'whitesmoke' }}>I'm a passionate and results-driven web developer with a proven track record of designing and developing cutting-edge web solutions. With a strong foundation in front-end and back-end development technologies, I specialize in crafting responsive, mobile-friendly websites that meet the unique needs of clients across diverse industries. I excel in turning ideas into reality, working closely with cross-functional teams to ensure that projects are delivered on time.</p>
          <Link to="/About" style={{ fontSize: '20px', color: 'whitesmoke', textDecoration: 'none' }}>See More About Me <ArrowRightOutlined /></Link>
          <Footer />
        </div>

      
      </>
  )
}

export default HomePage
