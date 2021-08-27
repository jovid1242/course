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

      const category = [
        {
          img: imgb5,
          title: 'великий гэтсби',
          author: 'F.Scott fitzgerald',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores!'
        },
          {
            img: imgb6,
            title: 'Чацка по имени джонатан',
            author: 'Richard Bach',
            text: 'Чацка по имени джонатан'
          },
          {
            img: imgb7,
            title: 'о дивный новый мир',
            author: 'aldous Huxly',
            text: 'о дивный новый мир'
          },
          {
            img: imgb8,
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
            <ModalCategory show={modal.visible} hide={hide} data={mData} categoryData={category} showM={showM} />
                <div className={styles.head__colection}>
                    <span>Коллекции</span>
                    {/* <Link href="#">Ещё</Link> */}
                </div>
                <div> 
                <Swiper {...params}>
                            {
                                slider_r?.map((el,index) => {
                                    return (
                                        <div key={index}>
                                                <div className={styles.colection_slide} onClick={() => show(el)}>
                                                    <div className={styles.colection_img_slide}>
                                                        <span>{el.text}</span>
                                                        <Image src={el.img} alt="imgb" /> 
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
