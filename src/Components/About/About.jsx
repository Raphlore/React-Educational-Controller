import React from 'react'
import './About.css'
import aboutimg1 from '../../assets/aboutimg1.jpg'
import aboutimg2 from '../../assets/aboutimg2.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutimg1} alt="" className='aboutimg1'/>
        <img src={aboutimg2} alt="" className='aboutimg2' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skilss, and experiences needed to excel in the dynamic filed of education.</p>
        <p>With a focus on the innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to archieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
