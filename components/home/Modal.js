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
                                    <Image src={data.image} width={150} height={150} alt="imgsdvdsb" />
                                </div>
                                <div className={styles.info__content}>
                                    <p>
                                        {data.author}
                                    </p>
                                    <span>
                                        {data.name}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.modal__btns}>
                            {/* https://drive.google.com/file/d/1fT45dPykTx0lr0VGf1IzJcOGH2xh3KaZ/view?usp=sharing */}
                                <Link href={data.file} target="_blank" download>
                                    <a download>
                                        <button>Скачать</button>
                                    </a>
                                </Link>
                            </div>
                            <div className="moda__text">
                                <span>
                                {
                                    data.description
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
