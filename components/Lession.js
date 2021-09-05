import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from 'react-player'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from '../styles/Lesson.module.scss';
import ErrorPage from '../pages/404.js'

import SwiperCore, {
    Pagination
  } from 'swiper/core';
  
SwiperCore.use([Pagination]);

export default function Lession({lession}) {
    console.log('ddddd', lession);
    if(!lession.id) {
       return <ErrorPage statusCode={404} />
    }
    const videos = JSON.parse(lession.videos)
    return (
        <>
            <Swiper pagination={true} className="mySwiper">               
                    {
                        videos?.map((el, index) => {
                            return (
                                <SwiperSlide key={el.key}>
                                    <div className={styles.lesson_wrappes} >
                                        <div className="container">
                                            <p className={styles.lesson_wrappes__title}>
                                                {lession.name}
                                            </p>
                                            <div className={styles.lesson_video}>
                                            <ReactPlayer 
                                                url={el.videoUrl}
                                                width="100%"
                                                height="100%"
                                                controls={false}
                                             />
                                            </div>
                                            <div className={styles.translation_btns}>
                                                <div className={styles.eng_btn}>
                                                    <button>
                                                        {el.phraseEng}
                                                    </button>
                                                </div>
                                                <div className={styles.ru_btn}>
                                                    <button>
                                                        {el.phraseTranslate}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                       {
                                           index === videos.length - 1 ? 
                                           <div className={styles.next__lesson_course}>
                                                <a href={`/lession/${lession.nextLessionId}`}>
                                                Следующий урок
                                                </a>
                                           </div>
                                           :
                                           ''
                                       }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
        </>
    )
}
