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
            title: 'Education'
        },
        {
            id: 2,
            img: profilePic,
            title: 'Education'
        },
        {
            id: 3,
            img: profilePic,
            title: 'Education'
        },
        {
            id: 4,
            img: profilePic,
            title: 'Education'
        },
        {
            id: 5,
            img: profilePic,
            title: 'Education'
        }
    ]
    return (
        <>
            <div className={styles.courser_wrapper}>
                <div className="container">
                    <div className="row">
                        {
                            cours?.map((el , index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                    <div className={styles.course_wrapper__card}>
                                        <div className={styles.card__img}>
                                        <Image src={el.img} alt="Picture of the author" />
                                        </div>
                                        <p className={styles.card__text}>{el.title}</p>
                                        <button className={styles.start_course}>
                                           <Link href={`/course/${el.id}`}>
                                            Начать
                                           </Link>
                                        </button>
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
