import React from 'react'
import '../styles/Course.module.scss'
import Image from 'next/image'
import profilePic from '../assets/icon/education.png'
import Link from 'next/link'
import styles from '../styles/Courses.module.scss' 

export default function Courses() {
    const cours = [
        {
            id: 1,
            img: profilePic,
            title: 'Начальный курс',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem in iure enim, obcaecati pariatur minima, eum, porro reiciendis quo hic nobis velit numquam! Eum natus dolor enim et ipsum!'
        },
        {
            id: 2,
            img: profilePic,
            title: 'Education',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem in iure enim, obcaecati pariatur minima, eum, porro reiciendis quo hic nobis velit numquam! Eum natus dolor enim et ipsum!'
        },
        {
            id: 3,
            img: profilePic,
            title: 'Education',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem in iure enim, obcaecati pariatur minima, eum, porro reiciendis quo hic nobis velit numquam! Eum natus dolor enim et ipsum!'
        },
        {
            id: 4,
            img: profilePic,
            title: 'Education',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem in iure enim, obcaecati pariatur minima, eum, porro reiciendis quo hic nobis velit numquam! Eum natus dolor enim et ipsum!'
        },
        {
            id: 5,
            img: profilePic,
            title: 'Education',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem in iure enim, obcaecati pariatur minima, eum, porro reiciendis quo hic nobis velit numquam! Eum natus dolor enim et ipsum!'
        }
    ]

    // const randomColor = () => {
    //     let arrColor = ['#d55733', '#ce3891', '#66d8d4', '#0153ce', '#76ce01', '#0195ce', '#01cd94', '#cdc701', '#a238ce', '#56f0e1', '#e656f0']  
    //     let ran = Math.floor(Math.random()*arrColor.length-1)
    //     return arrColor[ran]
    // }
    const randomImg = () => {
        const bacgImg = ['https://image.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-936.jpg', 'https://img2.badfon.ru/wallpaper/big/4/8a/cvety-nezhnyy-fiolet-fon.jpg',   'https://img4.goodfon.ru/wallpaper/nbig/2/c2/eustoma-tsvety-belyi-fon.jpg']
        let ran = Math.floor(Math.random()*bacgImg.length)
        return bacgImg[ran]
    }
    return (
        <>
            <div className={styles.courser_wrapper}>
                <div className="container">
                    <div className="row">
                        {
                            cours?.map((el , index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                    <div className={styles.course_wrapper__card} style={{background: `linear-gradient(270deg,rgba(13, 177, 177, 0.596), rgba(2, 8, 7, 0.6) ), url(${randomImg()})`}} >
                                        <div className={styles.card__img}>
                                        <p className={styles.card__text}>{el.title}</p>
                                            <Image src={el.img} alt="Picture of the author" />
                                        </div>                                        
                                        <span>{el.text.substr(0, 180) + '...'}</span>
                                        <div className="">
                                        <button className={styles.start_course}>
                                           <Link href={`/course/${el.id}`}>
                                            20 Уроков
                                           </Link>
                                        </button>
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
