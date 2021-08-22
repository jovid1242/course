import React, {useState} from 'react'
import Head from 'next/head' 
import Link from 'next/link'

const Sidebar = () => {
    const [sidebar , setSidebar] = useState(false)

    const toggleSidebar = () => {
        if(sidebar) {
            setSidebar(false)
        }  else {setSidebar(true)}
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
        </>
    );
}

export default Sidebar;
