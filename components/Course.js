import React, {useState, useEffect} from 'react'
import '../styles/Course.module.scss' 
import Link from 'next/link'
// import RellaxWrapper from 'react-rellax-wrapper'
import Image from 'next/image'
import styles from '../styles/Course.module.scss' 
import ava from '../assets/img/wsnaccad-anime-man.svg'
import ava2 from '../assets/img/1514826571.svg'
import { bgBlack } from 'ansi-colors'

export default function Course() {

    const cours = [
        {
            id: 1,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3001',
            img: ava
        },
        {
            id: 2,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        },
        {
            id: 3,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava
        },
        {
            id: 4,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891',
            img: ava2
        }
    ]
    // const randomColor = () => {
    //     let arrColor = ['#d55733', '#ce3891', '#66d8d4', '#0153ce', '#76ce01', '#0195ce', '#01cd94', '#cdc701', '#a238ce', '#56f0e1', '#e656f0']
    //     let ran = Math.floor(Math.random()*arrColor.length) 
    //     return arrColor[ran]
    // }

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
     
    return (
        <>
            <div className={styles.cours_wrapper}  style={{ transition: '0.5s ease-in-out' }} >
                <div className="container">
                    <div className="row">
                       {
                           cours?.map((el, index) => {
                               return (
                                    <div className="col-lg-12 col-md-4" key={index} style={{ transform: `translateY(-${offsetY * 0.5}px)`, transition: '0.099s' }} >
                                        <div className={Math.floor((index + 2) % 2) == 0 ? styles.card_cours_l : styles.card_cours_r}>
                                            <div className={styles.wrapper_content}>
                                                <div className={styles.wrapper_content_img}>
                                                    <Image src={el.img} alt="Picture of the author" />
                                                </div>
 
                                            <Link  href={`/lesson`} className={styles.card_cours__btn} >
                                                <a style={{background:  '#37bbb4'}}>
                                                 {index  + 1}  : {el.title}
                                                </a>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                               )
                           })
                       }
                    </div>
                </div>
            </div>
        </>
    )
}
