import React from 'react'
import '../styles/Course.module.scss'
import Image from 'next/image' 
import Link from 'next/link' 
import styles from '../styles/Courses.module.scss' 

export default function Courses({courses}) {

    const randomImg = () => {
        const bacgImg = ['https://storage.appewa.com/api/v1/files/97fbf00c-0f9b-4cb2-9866-8ff236bcf670?size=1200x900', 'https://storage.appewa.com/api/v1/files/0d8429ee-b09f-46f6-bf62-558c935f6204?size=1200x900', 'https://storage.appewa.com/api/v1/files/908f42ea-b28e-4996-b61e-ec6a46bc8e69?size=1200x900', 'https://storage.appewa.com/api/v1/files/cbebb802-9476-4c02-8908-21abf975602f?size=1200x900', 'https://storage.appewa.com/api/v1/files/c0cd252c-6062-4312-801a-c38f88b1727f?size=1200x900', 'https://storage.appewa.com/api/v1/files/3b67fd3b-0664-4452-ab38-b4a8eafa0f7b?size=1200x900', 'https://storage.appewa.com/api/v1/files/c12d81b6-bdb6-4ac5-a4b2-91bc0507dd45?size=1200x900', 'https://storage.appewa.com/api/v1/files/503e8679-6100-4778-8776-37be2d1590d9?size=1200x900', 'https://storage.appewa.com/api/v1/files/ff0f21da-5209-4d53-b846-db68472030be?size=1200x900', 'https://storage.appewa.com/api/v1/files/a52880cd-c76e-4234-afc4-21c6928e561a?size=1200x900']
        let ran = Math.floor(Math.random()*bacgImg.length)
        return bacgImg[ran]
    }
    const randomIcon = () => {
        const bacgImg = ['https://storage.appewa.com/api/v1/files/39ea83cf-8c19-4bda-98f8-f7392b0b815f?size=800x600', 'https://storage.appewa.com/api/v1/files/765d1b0c-011b-4d93-aab3-ec92e0cc5095?size=800x600', 'https://storage.appewa.com/api/v1/files/b0bac867-7e3d-41a5-8a49-1817d83e3a5c?size=800x600', 'https://storage.appewa.com/api/v1/files/b0bac867-7e3d-41a5-8a49-1817d83e3a5c?size=800x600', 'https://storage.appewa.com/api/v1/files/b508fcc0-78dd-443c-94c8-3a85bf4864ec?size=800x600', 'https://storage.appewa.com/api/v1/files/0d792f46-b63f-49c5-b9c9-24171b932205?size=800x600', 'https://storage.appewa.com/api/v1/files/67049084-ab08-4aa4-9b24-8e5790875347?size=800x600', 'https://storage.appewa.com/api/v1/files/9f6f3083-2ce4-4bf6-a55a-bc3456e1215e?size=800x600', 'https://storage.appewa.com/api/v1/files/2adace3a-b476-464b-81bb-b57654da2bcd?size=800x600', 'https://storage.appewa.com/api/v1/files/4508c217-6e09-47e1-a63c-c8dfde5e851c?size=800x600']
        let ran = Math.floor(Math.random()*bacgImg.length)
        return bacgImg[ran]
    }
    return (
        <>
            <div className={styles.courser_wrapper}>
                <div className="container">
                    <div className="row">
                        {
                            courses?.map((el , index) => {
                                return (
                                    <div className="col-md-6 rellax" data-rellax-speed="10" key={index}>
                                    <div className={styles.course_wrapper__card} style={{background: `url(${randomImg()})`, backgroundSize: 'cover'}} >   
                                        <Link href={`/course/${el.id}`}>
                                            <a>
                                            <div className={styles.card__img}>
                                                <p className={styles.card__text}>{el.name.substr(0, 60)}</p>
                                                <Image
                                                src={randomIcon()}
                                                alt="Picture of the author"
                                                width={500}
                                                height={500}
                                                crossOrigin
                                            />
                                            </div>                                        
                                            {/* <span>{el?.description?.substr(0, 180) + '...'}</span> */}
                                            <div className="">
                                                <button className={styles.start_course}>
                                                    {el.lessionCount} Уроков
                                                </button>
                                            </div>  
                                            </a>                                      
                                        </Link>
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
