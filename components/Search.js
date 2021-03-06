import React, {useState} from 'react';
import styles from '../styles/Search.module.scss'
import Modal from './home/Modal.js'

import Image from 'next/image'
import Link from 'next/link'

const Search = ({book}) => {

    const [modal , setModal] = useState({
        visible: false
    })

    const [mData, setMData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const hide = () =>  {
        setModal({ visible: false });
    }

    const show = el => {
        setModal({visible: true});
        setMData(el)
    }
 
    return (
        <>
            <Modal show={modal.visible} hide={hide} data={mData} />
            <div className={styles.headet_search}>
                <div className={styles.back}>
                    <Link href="/">
                        <svg baseProfile="tiny" version="1.2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.059V6.5a1.001 1.001 0 00-1.707-.708L4 12l6.293 6.207a.997.997 0 001.414 0A.999.999 0 0012 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"/></svg>
                    </Link>
                </div>
                <input type="text" onChange={e => setSearchValue(e.target.value)} placeholder="Поиск" />
            </div>
            <div className={styles.search__wrapper}>
                <div className="container">
                    <div className={styles.list__data}>
                        <ul>
                            {
                              book?.filter((e) => {
                                  if (!searchValue === null) {
                                    return e
                                  } else if (e.title?.toLowerCase().includes(searchValue.toLowerCase()) || e.text?.toLowerCase().includes(searchValue.toLowerCase())) {
                                    return e
                                  }
                                }).map((el,index) => {
                                    return (
                                        <li key={index} onClick={() => show(el)}>
                                            <Image src={el.image} width={150} height={150} alt="imgsdvdsb" />
                                            <div className={styles.list_cat_info}>
                                                <p>{el.author}</p>
                                                <span>{el.name}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
