import React, {useState} from 'react'
import styles from '../../styles/ModalCategory.module.scss'
import Rodal from 'rodal'; 
import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal';
// include styles
import 'rodal/lib/rodal.css'; 



const ModalCategory = ({show, hide, data, categoryData, showM}) => {

    const [modal , setModal] = useState({
        visible: false
    })
    
    const [mData, setMData] = useState([])
    
    const hideModal = () =>  {
        setModal({ visible: false });
        showM(true)
    }
    
    const showModal = el => {
        setModal({visible: true});
        setMData(el)
        hide({visible: false})
    }
    
    return (
        <div className="modal__h80">            
            <Modal show={modal.visible} hide={hideModal} data={mData} />
        <Rodal visible={show} onClose={hide.bind()}>
            <div className={styles.modal__wrapper}>
                    {
                        data.length === 0 ? null :
                    <div className="container">
                        <div className={styles.box1}>
                            <div className={styles.modal_c_img}>
                                <span>{data.text}</span>
                                <Image src={data.img.src} width={150} height={150} alt="imgsdvdsb" />
                            </div> 
                        </div> 
                        <div className={styles.list_cat_data}>
                            <ul>
                                {
                                    categoryData?.map((el ,index) => {
                                        return (
                                            <li key={index} onClick={() => showModal(el)}>
                                                <Image src={el.img.src} width={150} height={150} alt="imgsdvdsb" />
                                                <div className={styles.list_cat_info}>
                                                    <p>{el.author}</p>
                                                    <span>{el.title}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    }
                </div>               
        </Rodal>
    </div>
    );
}

export default ModalCategory;
