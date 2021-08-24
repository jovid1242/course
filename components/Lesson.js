import React, { useState }  from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from 'react-player'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from '../styles/Lesson.module.scss';

import SwiperCore, {
    Pagination
  } from 'swiper/core';
  
SwiperCore.use([Pagination]);

export default function Lesson() {
    const lessonData = [
        {
            id: 1,
            title: 'Это универсальное приветствие',
            video: 'scdc',
            eng_txt: 'Hello',
            ru_txt: 'Здравствуй!'
        },
        {
            id: 2,
            title: 'text',
            video: 'scdc',
            eng_txt: 'hello',
            ru_txt: 'привет'
        },
        {
            id: 3,
            title: 'text',
            video: 'scdc',
            eng_txt: 'hello',
            ru_txt: 'привет'
        },
        {
            id: 4,
            title: 'text',
            video: 'scdc',
            eng_txt: 'hello',
            ru_txt: 'привет'
        }
    ]
    return (
        <>
            <Swiper pagination={true} className="mySwiper">
               
                    {
                        lessonData?.map((el , index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.lesson_wrappes} >
                                        <div className="container">
                                            <p className={styles.lesson_wrappes__title}>
                                                {el.title}
                                            </p>
                                            <div className={styles.lesson_video}>
                                            <ReactPlayer 
                                                url='https://www.youtube.com/watch?v=DiJzNNewpXA&list=RDDiJzNNewpXA&start_radio=1'
                                                width="100%"
                                                height="100%"
                                                controls={false}
                                             />
                                            </div>
                                            <div className={styles.translation_btns}>
                                                <div className={styles.eng_btn}>
                                                    <button>
                                                        {el.eng_txt}
                                                    </button>
                                                </div>
                                                <div className={styles.ru_btn}>
                                                    <button>
                                                        {el.ru_txt}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
        </>
    )
}
