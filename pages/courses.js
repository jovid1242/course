import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js' 
import Courses from '../components/Courses.js' 

const Index = () => {
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Курс</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <Courses />
            </section>
        </>
    );
}

export default Index;
