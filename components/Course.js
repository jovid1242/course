import React, {useState} from 'react'
import '../styles/Course.module.scss' 
import Link from 'next/link'
import styles from '../styles/Course.module.scss'

export default function Course() {

    const cours = [
        {
            id: 1,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3001'
        },
        {
            id: 2,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891'
        },
        {
            id: 3,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891'
        },
        {
            id: 4,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891'
        },
        {
            id: 5,
            title: 'Education',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus tempora recusandae ipsum totam!',
            background_fon1: '#66d8d4',
            background_fon2: '#ce3891'
        }
    ]
    const randomColor = () => {
        let arrColor = ['#d55733', '#ce3891', '#66d8d4', '#0153ce', '#76ce01', '#0195ce', '#01cd94', '#cdc701', '#a238ce', '#56f0e1', '#e656f0']
        let ran = Math.floor(Math.random()*arrColor.length-1)
        return arrColor[ran]
    }
    return (
        <>
            <div className={styles.cours_wrapper}>
                <div className="container">
                    <div className="row">
                       {
                           cours?.map((el, index) => {
                               return (
                                <div className="col-md-3" key={index}>
                                    <div className={styles.card_cours}>
                                        <div className={styles.font1} style={{background: randomColor()}}></div>
                                        <div className={styles.font2} style={{background: randomColor()}}></div>
                                        <p className={styles.card_cours__title}>
                                            {el.title}
                                        </p>
                                        <p className={styles.card_cours__text}>
                                             {el.text}
                                        </p>
                                        <div className={styles.card_cours__btn}>
                                            <button style={{background: randomColor()}}>
                                            <Link href={`/lesson`}>
                                                Начать
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
