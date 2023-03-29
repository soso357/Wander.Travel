import React, { useEffect } from 'react'
import './Cards.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import bbb from '/src/Components/Assets/bbb.jpg'
import bbb1 from '/src/Components/Assets/bbb1.jpg'
import bbb2 from '/src/Components/Assets/bbb2.jpg'

import { AiOutlineSwapRight } from 'react-icons/ai'

const Cards = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='cards'>
       <div data-aos='fade-up'  data-aos-duration='2000' className='cardContainer container grid'>
         <div className="singleCard">
          <div className="imgDiv">
            <img src={bbb} />
          </div>
          <h4 className="textDiv">
            Ballon Flight
          </h4>
         </div>

         <div className="singleCard">
          <div className="imgDiv">
            <img src={bbb1} />
          </div>
          <h4 className="textDiv">
            Beach Travels
          </h4>
         </div>

         <div className="singleCard">
          <div className="imgDiv">
            <img src={bbb2} />
          </div>
          <h4 className="textDiv">
            Mountain Tours
          </h4>
         </div>
       </div>

       <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon'/>
       </div>
    </div>
  )
}

export default Cards