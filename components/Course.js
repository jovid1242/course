import React, {useState, useEffect} from 'react'
import '../styles/Course.module.scss' 
import Link from 'next/link'
// import RellaxWrapper from 'react-rellax-wrapper'
import Image from 'next/image'
import styles from '../styles/Course.module.scss' 
import ava from '../assets/img/wsnaccad-anime-man.svg'
import ava2 from '../assets/img/1514826571.svg'
import { bgBlack } from 'ansi-colors'

export default function Course({lessions}) {

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
                        lessions?.map((el, index) => {
                               return (
                                    <div className="col-lg-12 col-md-4" key={index} style={{ transform: `translateY(-${offsetY * 0.5}px)`, transition: '0.099s' }} >
                                        <div className={Math.floor((index + 2) % 2) == 0 ? styles.card_cours_l : styles.card_cours_r}>
                                            <div className={styles.wrapper_content}>
                                                <div className={styles.wrapper_content_img}>
                                                <Image
                                                    src={el.image}
                                                    alt="Picture of the author"
                                                    width={500}
                                                    height={500}
                                                />
                                                </div>
 
                                            <Link href={`/lession/${el.id}`} className={styles.card_cours__btn} >
                                                <a style={{background:  '#37bbb4'}}>
                                                 {index  + 1}  : {el.name}
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
