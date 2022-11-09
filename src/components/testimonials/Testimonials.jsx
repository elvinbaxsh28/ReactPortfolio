import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';





const data = [
  {
    avatar: AVTR1,
    name:'Tina Snow',
    rewiev: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
  },
  {
    avatar: AVTR2,
    name:'Tina Snow',
    rewiev: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
  },
    {avatar: AVTR3,
    name:'Tina Snow',
    rewiev: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
    },
    {
      avatar: AVTR4,
    name:'Tina Snow',
    rewiev: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis praesentium mollitia quasi modi unde possimus delectus a dolores expedita consequuntur.'
    }
  ]

const Testimonials = () => {
  return (
    //<section id='testimonials'>Testimonials</section>
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
       {
        data.map(({image , avatar, name , rewiev}, index) => {

        return(
          <article key={index} className='testimonials'>
          <div className="client_avatar">
            <img src={image} alt="" />
            </div>
          <div>
          <h5 className='clients_name'>{name}</h5>
            <small className='clients_review'>
               {rewiev}
            </small>
          </div>

        </article>
        )
        })
       }
       </div>

    </section>

  )
}
export default Testimonials