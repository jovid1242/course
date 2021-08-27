import React, {useState} from 'react'

import Image from 'next/image'
import Head from 'next/head' 
import Link from 'next/link'
import courseIcon from '../assets/icon/course.svg'

const Sidebar = () => {
    const [sidebar , setSidebar] = useState(false)

    const toggleSidebar = () => {
        if(sidebar) {
            setSidebar(false)
        }  else {setSidebar(true)}
    }

    // const [tabClass , setTabClass] = useState(false)

    // const toggleTabClass= () => {
    //     if(tabClass) {
    //         setTabClass(false)
    //     }  else {setTabClass(true)}
    // }


    return (
        <>
        <Head>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
         
                <div className={!sidebar ? "sidebar" : "sidebar open"}>
                <div className="logo-details">
                <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">Course</div>
                    <i className='bx bx-menu' onClick={() => toggleSidebar()} id="btn" ></i>
                </div>
                <ul className="nav-list">
                <li>
                    <i className='bx bx-search' ></i>
                    <input type="text" placeholder="Search..." />
                </li>
                <li>
                <Link  href="/">
                    <a>
                    <i className='bx bx-grid-alt'></i>
                    <span className="links_name">Курсы</span>
                    </a>
                </Link>
                </li>   
                </ul>
            </div> 
            <div className="mobile__tabbar">
                <ul className="tab_list">
                    <li>
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-item__icon">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </a>
                    </Link>                       
                    </li>
                    <li>
                        <Link href="/courses">
                            <a> 
<svg xmlns="http://www.w3.org/2000/svg" className="svg__course_icon" viewBox="0 0 100.353 100.353"><path d="M90.54 33.012L49.476 5.636a1.5 1.5 0 00-1.664 0L6.748 33.012a1.501 1.501 0 000 2.496l6.237 4.158v21.913c0 .511.26.987.69 1.263l34.399 22.053a1.5 1.5 0 001.655-.024l17.947-12.244v8.538L60.99 94.537a1.506 1.506 0 00.065 1.46c.273.441.757.711 1.276.711H76.02c.52 0 1.003-.27 1.276-.711.272-.442.298-.995.065-1.46l-6.686-13.372V70.58l11.377-7.762a1.5 1.5 0 00.654-1.239V40.73l7.833-5.222a1.501 1.501 0 00.001-2.496zM64.759 93.708l4.417-8.834 4.417 8.834h-8.834zM48.858 81.834L15.985 60.759V41.666l31.827 21.219a1.498 1.498 0 001.664 0l18.2-12.134v18.244L48.858 81.834zm30.849-21.047l-9.031 6.162V48.751l9.031-6.021v18.057zm.979-22.315a1.488 1.488 0 00-.574.383l-10.936 7.291-19.7-13.134a1.5 1.5 0 10-1.664 2.496l18.66 12.44-17.828 11.886-38.36-25.574 38.36-25.573 38.36 25.573-6.318 4.212z"/></svg>


                            </a>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="game_icon">
                        <svg width="64" height="64" id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="61.83" cy="47.5" r="2.5" transform="translate(-8.16 81.85) rotate(-63.67)"/><circle cx="71.83" cy="47.5" r="2.5" transform="translate(-2.6 90.82) rotate(-63.67)"/><circle cx="66.83" cy="40.5" r="2.5"/><path d="M90.74,46.84,85.42,23.16A8.36,8.36,0,0,0,78.79,17a1.48,1.48,0,0,0-.31,0H69.69c-1.77,0-3.17,1.89-4.76,5H37.76c-1.44-2.8-2.85-5-4.76-5H24.21a1.47,1.47,0,0,0-.31,0,8.36,8.36,0,0,0-6.63,6.12L11.94,46.84A65.37,65.37,0,0,0,10.7,68l.46,4.37a8.94,8.94,0,0,0,5.44,8.22,7.79,7.79,0,0,0,2.85.55,8.64,8.64,0,0,0,6.1-2.7,1.52,1.52,0,0,0,.18-.22L36.07,63H48.2c-1.86,3-3,7.33.48,11.46,4.83,5.79,6.65,8.5,6.65,14a1.5,1.5,0,0,0,3,0c0-6.47-2.24-9.83-7.35-16-3.42-4.1-.19-8.26,1-9.54H66.62L77,78.2a1.52,1.52,0,0,0,.18.22,8.2,8.2,0,0,0,8.95,2.15,8.94,8.94,0,0,0,5.44-8.22L92,68A65.37,65.37,0,0,0,90.74,46.84ZM89,67.67l-.46,4.42s0,.07,0,.1A6,6,0,0,1,85,77.77a5.19,5.19,0,0,1-5.63-1.38L68.65,60.66A1.5,1.5,0,0,0,67.41,60H35.27a1.5,1.5,0,0,0-1.24.66L23.33,76.39a5.19,5.19,0,0,1-5.64,1.38,6,6,0,0,1-3.54-5.59s0-.07,0-.1l-.46-4.42A62.32,62.32,0,0,1,14.87,47.5L20.2,23.8A5.34,5.34,0,0,1,24.37,20h8.49c.52.32,1.4,1.72,2.62,4.17a1.5,1.5,0,0,0,1.34.83h29a1.5,1.5,0,0,0,1.35-.84c1.58-3.21,2.33-4,2.62-4.16h8.49a5.34,5.34,0,0,1,4.18,3.81L87.81,47.5A62.32,62.32,0,0,1,89,67.67Z"/><path d="M32.83,36a7.5,7.5,0,1,0,7.5,7.5A7.51,7.51,0,0,0,32.83,36Zm0,12a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,32.83,48Z"/><path d="M68.84,15H80.43a1.5,1.5,0,0,0,0-3H68.84a1.5,1.5,0,0,0,0,3Z"/><path d="M21.84,15H33.43a1.5,1.5,0,0,0,0-3H21.84a1.5,1.5,0,0,0,0,3Z"/></svg>
                        </a>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-item__icon">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
