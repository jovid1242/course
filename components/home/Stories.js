import React from 'react'
import Image from 'next/image' 
import styles from '../../styles/Home.module.scss'
import Swiper from 'react-id-swiper';  
import "swiper/swiper.min.css";  

import imgb5 from '../../assets/img/5.jpg'
import imgb6 from '../../assets/img/6.jpg'
import imgb7 from '../../assets/img/7.jpg'
import imgb8 from '../../assets/img/4-4-6.jpg'

export default function Colection() {

    const params = {
        slidesPerView: 3,
        spaceBetween: 10,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        breakpoints: {
          1024: {
            slidesPerView: 4, 
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 2,
            width: 280,
            spaceBetween: 50
          }
        }
      }

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
          img: imgb6,
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
                <Swiper {...params}>
                            {
                                slider_r?.map((el,index) => {
                            return (
                                <div key={index}>
                                    <div className={styles.stories__slide}>
                                        <div className={styles.stories__img_slide}>
                                            <span>{el.text}</span>
                                            <Image src={el.img} alt="imgb" /> 
                                        </div>
                                    </div>
                                </div>  
                                )
                            })
                            }                           
                </Swiper>
                </div>
            </div>
        </>
    )
}
