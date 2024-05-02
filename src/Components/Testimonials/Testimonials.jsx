import React, { useRef } from 'react'
import './Testimonials.css'
import arrow1 from '../../assets/arrow1.png'
import backicon1 from '../../assets/backicon1.jpg'
import user1 from '../../assets/user1.jpg'
 import user2 from '../../assets/user2.jpg'
 import user3 from '../../assets/user3.webp'
 import user4 from '../../assets/user4.jpg'

const Testimonials = () => {

   const slider = useRef();
   let tx = 0;

  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={arrow1} alt=""className='arrow' onClick={slideForward}/>
      <img src={backicon1} alt=""className='backicon' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt="" />
                <div>
                  <h3>Barbara Lambo</h3>
                  <span>Edusity, Nigeria</span>
                </div>
              </div>
              <p>Chosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt="" />
                <div>
                  <h3>Michael Owen</h3>
                  <span>Edusity, Nigeria</span>
                </div>
              </div>
              <p>Chosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, Nigeria</span>
                </div>
              </div>
              <p>Chosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt="" />
                <div>
                  <h3>Tonya Calvin</h3>
                  <span>Edusity, Nigeria</span>
                </div>
              </div>
              <p>Chosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
