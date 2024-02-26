import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined'


const HomePage = () => {
  return (
    <div style={{margin: '130px'}}>
      <h1 style={{fontSize: '40px', textTransform: 'uppercase', color:'whitesmoke'}}>I'M Prajwal Kotagi</h1>
      <p style={{fontSize: '25px', fontWeight: '500',color:'whitesmoke'}}>Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,

Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, you can find me reading ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can CONTACT ME</p>
    <Link to="/About" style={{fontSize: '20px', color: 'whitesmoke', textDecoration: 'none'}}>See More About Me <ArrowRightOutlined /></Link>
    </div>
  )
}

export default HomePage
