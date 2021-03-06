import React, {useState} from 'react'
import Image from 'next/image' 
import styles from '../../styles/Home.module.scss'
import Swiper from 'react-id-swiper';  
// import "swiper/swiper.min.css"; 

import ModalCategory from './ModalCategory';

import imgb5 from '../../assets/img/5.jpg'
import imgb6 from '../../assets/img/6.jpg'
import imgb7 from '../../assets/img/7.jpg'
import imgb8 from '../../assets/img/4-4-6.jpg'

export default function Colection({films}) {
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
            spaceBetween: 130
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 2,
            width: 550,
            spaceBetween: 50
          }
        }
      }

    const [modal , setModal] = useState({
        visible: false
    })

    const [mData, setMData] = useState([])

    const hide = () =>  {
        setModal({ visible: false });
    }

    
    const showM = e => {
      setModal({ visible: e });
    }

    const show = el => {
        setModal({visible: true});
        setMData(el)
    }
    
    return (
        <>
            <div className="colection__wrapper">
            <ModalCategory show={modal.visible} hide={hide} data={mData} showM={showM} />
                <div className={styles.head__colection}>
                    <span>Фильмы</span>
                    {/* <Link href="#">Ещё</Link> */}
                </div>
                <div> 
                <Swiper {...params}>
                            {
                              films?.map((el , index) => {
                                    return (
                                        <div key={index}>
                                                <div className={styles.colection_slide} onClick={() => show(el)}>
                                                    <div className={styles.colection_img_slide}>
                                                        <span>{el.name}</span>
                                                        <Image src={el.image} width={150} height={150} alt="imgsdvdsb" />
                                                    </div>
                                                </div>
                                        </div> 
                                    )
                                })
                            }    
                            
                            <div></div>                        
                </Swiper>
                </div>
            </div>
        </>
    )
}
