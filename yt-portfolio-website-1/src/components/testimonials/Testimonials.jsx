import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi possimus vel dolorum dignissimos iste quibusdam corporis sapiente molestiae? Assumenda excepturi autem reprehenderit distinctio suscipit, fugit expedita quo soluta obcaecati.',
  },
  {
    avatar: AVTR2,
    name: 'John Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi possimus vel dolorum dignissimos iste quibusdam corporis sapiente molestiae? Assumenda excepturi autem reprehenderit distinctio suscipit, fugit expedita quo soluta obcaecati.',
  },
  {
    avatar: AVTR3,
    name: 'Peter Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi possimus vel dolorum dignissimos iste quibusdam corporis sapiente molestiae? Assumenda excepturi autem reprehenderit distinctio suscipit, fugit expedita quo soluta obcaecati.',
  },
  {
    avatar: AVTR4,
    name: 'Ella Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eos ab inventore incidunt. Rem qui provident labore sapiente, suscipit quod! Dolorem facilis fuga consequatur exercitationem a, optio id voluptas dignissimos!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimoninals</h2>

        <Swiper 
          className="container testimonials__container"
              // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return (
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                      <img src={avatar} alt={name} />
                  </div>
                  <h5>{name}</h5>
                  <small className='client__review'>
                      {review}
                  </small>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials