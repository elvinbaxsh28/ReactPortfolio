import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';

//import 'swiper/css/scrollbar';



const data = [
  {
    avatar: AVTR1,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
  },
  {
    avatar: AVTR2,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
  },
    {avatar: AVTR3,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
    },
    {
      avatar: AVTR4,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
    }
  ]

const Testimonials = () => {
  return (
    
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
    
      >
       {
        data.map(({avatar , name , review}, index) => {

        return(
          <SwiperSlide key={index} className='testimonials'>
          <div className="client_avatar">
            <img src={avatar} alt="" />
            </div>
          <div>
          <h5 className='clients_name'>{name}</h5>
            <small className='clients_review'>
               {review}
            </small>
          </div>

        </SwiperSlide>
        )
        })
       }
       </Swiper>

    </section>

  )
}
export default Testimonials




// {/* <section id='testimonials'>Testimonials
//     <h5>Review from clients</h5>

//     <div className="container testimonials_container">
//         <article className="testimonial">
//         <div className="client_avatar">
//             <img src={AVTR1} alt="" />
//             </div>
//         </article>
//     </div>
//     </section> */}