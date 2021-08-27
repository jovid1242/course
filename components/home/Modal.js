import React from 'react'
import styles from '../../styles/Home.module.scss' 
import Rodal from 'rodal'; 
import Image from 'next/image'
import Link from 'next/link'
// include styles
import 'rodal/lib/rodal.css'; 

export default function Modal({show, hide, data}) {  
    
    return (
        <div className="modal__h80">            
            <Rodal visible={show} onClose={hide.bind()}>
                <div className={styles.modal__wrapper}>
                        {
                            data.length === 0 ? null :
                        <div className="container">
                            <div className={styles.box1}>
                                <div className={styles.modal__img}>
                                    <Image src={data.img.src} width={150} height={150} alt="imgsdvdsb" />
                                </div>
                                <div className={styles.info__content}>
                                    <p>
                                        {data.author}
                                    </p>
                                    <span>
                                        {data.title}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.modal__btns}>
                                <Link href="https://t.me/seniortutorials/181">
                                    <a>
                                        <button>Скачать</button>
                                    </a>
                                </Link>
                            </div>
                            <div className="moda__text">
                                <span>
                                {
                                    data.text
                                }                                
                                </span>
                            </div>
                        </div>
                        }
                    </div>               
            </Rodal>
        </div>
    )
}