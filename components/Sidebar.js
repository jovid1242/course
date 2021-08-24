import React, {useState} from 'react'

import Image from 'next/image'
import Head from 'next/head' 
import Link from 'next/link'

const Sidebar = () => {
    const [sidebar , setSidebar] = useState(false)

    const toggleSidebar = () => {
        if(sidebar) {
            setSidebar(false)
        }  else {setSidebar(true)}
    }

    const [tabClass , setTabClass] = useState(false)

    const toggleTabClass= () => {
        if(tabClass) {
            setTabClass(false)
        }  else {setTabClass(true)}
    }


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
                    <li onClick={() => {toggleTabClass()}} className={!tabClass ? "" : "activeTab"}>
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-item__icon">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </a>
                    </Link>                       
                    </li>
                    <li>
                        <a href="#" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-item__icon">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-item__icon">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-item__icon">
                            <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            ></path>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
