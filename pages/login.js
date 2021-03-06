import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js' 
import Main from '../components/Login.js'

const login = () => {
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Login</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <Main />
            </section>
        </>
    );
}

export default login;
