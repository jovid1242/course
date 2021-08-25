import React from 'react'
import Image from 'next/image' 
import styles from '../../styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; 


import imgb5 from '../../assets/img/5.jpg'
import imgb6 from '../../assets/img/6.jpg'
import imgb7 from '../../assets/img/7.jpg'
import imgb8 from '../../assets/img/4-4-6.jpg'

export default function Colection() {
    const slider_r = [
          {
            img: imgb5,
            text: 'Книжный оскар'
          },
          {
            img: imgb6,
            text: 'Нон-фикшн'
          },
          {
            img: imgb7,
            text: 'Фантастика'
          },
          {
            img: imgb8,
            text: 'Детские книги для взрослых'
          }
      ]
    return (
        <>
            <div className="colection__wrapper">
                <div className={styles.head__colection}>
                    <span>Коллекции</span>
                    {/* <Link href="#">Ещё</Link> */}
                </div>
                <div> 
                    <Swiper slidesPerView={2} spaceBetween={170} className="mySwiper">
                    {
                        slider_r?.map((el,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.colection_slide}>
                                        <div className={styles.colection_img_slide}>
                                            <span>{el.text}</span>
                                            <Image src={el.img} alt="imgb" /> 
                                        </div>
                                    </div>
                            </SwiperSlide> 
                            )
                        })
                    }  
                        <SwiperSlide></SwiperSlide>                              
                    </Swiper>
                </div>
            </div>
        </>
    )
}
