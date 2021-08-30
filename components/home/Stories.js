import React, {useState} from 'react'
import Image from 'next/image' 
import styles from '../../styles/Home.module.scss'
import Swiper from 'react-id-swiper';  
import "swiper/swiper.min.css"; 

import Modal from './Modal'; 

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
            slidesPerView: 6, 
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

    const category = [
      {
        img: imgb7,
        title: 'великий гэтсби',
        author: 'F.Scott fitzgerald',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores!'
      },
        {
          img: imgb5,
          title: 'Чацка по имени джонатан',
          author: 'Richard Bach',
          text: 'Чацка по имени джонатан'
        },
        {
          img: imgb8,
          title: 'о дивный новый мир',
          author: 'aldous Huxly',
          text: 'о дивный новый мир'
        },
        {
          img: imgb6,
          title: 'Richard Bach',
          author: 'Richard Bach',
          text: 'алиса в стране чудес'
        }
    ] 

  const [modal , setModal] = useState({
      visible: false
  })

  const [mData, setMData] = useState([])

  const hide = () =>  {
      setModal({ visible: false });
  }

  const show = el => {
      setModal({visible: true});
      setMData(el)
  }
 
    return (
        <>
            <div className="stories___wrapper">
            <Modal show={modal.visible} hide={hide} data={mData} />
                <div className={styles.head__colection}>
                    <span>Рассказы</span>
                    {/* <Link href="#">Ещё</Link> */}
                </div>
                <div> 
                <Swiper {...params}>
                            {
                              category?.map((el,index) => {
                            return (
                                <div key={index}>
                                    <div className={styles.stories__slide} onClick={() => show(el)}>
                                        <div className={styles.stories__img_slide}>
                                            <span>{el.title}</span>
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
