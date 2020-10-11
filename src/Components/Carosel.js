import React from 'react'
import './Carosel.css'
import '../MediaQuery/CarouselQuery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Carosel() {
    return (
        <div>
          <Carousel className='slider'>
            <div className='carousel__container'>
              <img src='https://raw.githubusercontent.com/nihal9956/carosel/master/cake.jpeg' alt='hero_img'/>
              <div className='carousel__detailes'>
                <h1>MADE WITH LOVE</h1>
               
                <p>Maecenas interdum nisl</p> <p>sit amet pulvinur volutpat.</p><p>felis eu neque vehicula fringilla</p>
                <button>EXPLORE</button>
              </div>
            </div>
            <div className='carousel__container'>
              <img src='https://raw.githubusercontent.com/nihal9956/carosel/master/cake.jpeg' alt='hero_img'/>
              <div className='carousel__detailes'>
                <h1>MADE WITH LOVE</h1>
               
                <p>Maecenas interdum nisl</p> <p>sit amet pulvinur volutpat.</p><p>felis eu neque vehicula fringilla</p>
                <button>EXPLORE</button>
              </div>
            </div>
            <div className='carousel__container'>
              <img src='https://raw.githubusercontent.com/nihal9956/carosel/master/cake.jpeg' alt='hero_img'/>
               <div className='carousel__detailes'>
                <h1>MADE WITH LOVE</h1>
               
                <p>Maecenas interdum nisl</p> <p>sit amet pulvinur volutpat.</p><p>felis eu neque vehicula fringilla</p>
                <button>EXPLORE</button>
              </div>
            </div>
          </Carousel>

         <hr className='divider'/>
        </div>
    )
}

export default Carosel
