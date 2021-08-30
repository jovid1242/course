import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Swiper from 'react-id-swiper';  
import Modal from './home/Modal';

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
          title: 'великий гэтсби',
          author: 'F.Scott fitzgerald',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores!'
        },
          {
            img: imgb,
            title: 'Чацка по имени джонатан',
            author: 'Richard Bach',
            text: 'Чацка по имени джонатан'
          },
          {
            img: imgb3,
            title: 'о дивный новый мир',
            author: 'aldous Huxly',
            text: 'о дивный новый мир'
          },
          {
            img: imgb4,
            title: 'Richard Bach',
            author: 'Richard Bach',
            text: 'алиса в стране чудес'
          },
          {
            img: imgb2,
            title: 'великий гэтсби',
            author: 'F.Scott fitzgerald',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat consequatur consectetur itaque nulla cum harum nobis. Molestiae voluptate quod dolorem amet? Laboriosam eius quis distinctio aspernatur aliquam nesciunt maiores!'
          },
            {
              img: imgb,
              title: 'Чацка по имени джонатан',
              author: 'Richard Bach',
              text: 'Чацка по имени джонатан'
            },
            {
              img: imgb3,
              title: 'о дивный новый мир',
              author: 'aldous Huxly',
              text: 'о дивный новый мир'
            },
            {
              img: imgb4,
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
            <div className={styles.header}>
                <span>
                    Site name
                </span>
                <Link href="/search"><Image src={searchIcon} alt="search" /></Link>
            </div>
            <Modal show={modal.visible} hide={hide} data={mData} />
            <div className={styles.main}>            
            
                <div className="container3">
                    <div className={styles.book__wrapper}>
                        <div className={styles.head__colection}>
                            <span>Книги</span>
                            <Link href="/search">Ещё</Link>
                        </div>
                        <div className={styles.slider__wrapper}> 
                            <Swiper {...params}>
                            {
                                slider_r?.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={styles.slide_cont} onClick={() => show(el)}>
                                                <div className={styles.img_slide} style={{background: `url(${el.img.src})`}}>
                                                    {/* <Image src={el.img} alt="imgb" /> */}
                                                </div>
                                                <p>{el.author}</p>
                                                <span>{el.title}</span>
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
