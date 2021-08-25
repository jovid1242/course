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
          img: imgb7,
          text: 'Книжный оскар'
        },
        {
          img: imgb5,
          text: 'Нон-фикшн'
        },
        {
          img: imgb8,
          text: 'Фантастика'
        },
        {
          img: imgb7,
          text: 'Детские книги для взрослых'
        }
    ]
 
    return (
        <>
            <div className="stories___wrapper">
                <div className={styles.head__colection}>
                    <span>Рассказы</span>
                    {/* <Link href="#">Ещё</Link> */}
                </div>
                <div> 
                    <Swiper slidesPerView={3} spaceBetween={70} className="mySwiper">
                    {
                        slider_r?.map((el,index) => {
                            return (
                                <SwiperSlide key={index}>
                                <div className={styles.stories__slide}>
                                    <div className={styles.stories__img_slide}>
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
