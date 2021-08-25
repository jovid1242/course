import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Swiper from 'react-id-swiper'; 

import searchIcon from '../assets/icon/search.svg'
import imgb from '../assets/img/pic_l_min.jpg'
import imgb2 from '../assets/img/2.jpg'
import imgb3 from '../assets/img/3.jpg'
import imgb4 from '../assets/img/4.jpg'

import Colection from './home/Colection';
import Stories from './home/Stories';

export default function Home() {
    const params = {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            width: 300,
            spaceBetween: 10
          }
        }
      }

      const slider_r = [
        {
          img: imgb2,
          title: 'F.Scott fitzgerald',
          text: 'великий гэтсби'
        },
          {
            img: imgb,
            title: 'Richard Bach',
            text: 'Чацка по имени джонатан'
          },
          {
            img: imgb3,
            title: 'aldous Huxly',
            text: 'о дивный новый мир'
          },
          {
            img: imgb4,
            title: 'Richard Bach',
            text: 'алиса в стране чудес'
          }
      ]

    return (
        <>
            <div className={styles.header}>
                <span>
                    Библиотека
                </span>
                <Image src={searchIcon} alt="search" />
            </div>
            <div className={styles.main}>
                <div className="container3">
                    <div className={styles.book__wrapper}>
                        <div className={styles.head__colection}>
                            <span>Книги</span>
                            <Link href="#">Ещё</Link>
                        </div>
                        <div className={styles.slider__wrapper}> 
                            <Swiper {...params}>
                            {
                                slider_r?.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={styles.slide_cont}>
                                                <div className={styles.img_slide}>
                                                    <Image src={el.img} alt="imgb" />
                                                </div>
                                                <p>{el.title}</p>
                                                <span>{el.text}</span>
                                            </div>
                                        </div>  
                                    )
                                })
                            }                            
                            </Swiper>
                        </div>
                    </div>  
                    <Colection />
                    <Stories />
                </div>
            </div>
        </>
    )
}
