import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js' 
import Courses from '../components/Courses.js'  

const Index = (props) => {
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Курс</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <Courses courses={props.data.courses} />
            </section>
        </>
    );
}

export default Index;


export async function getStaticProps(context) {
    // let data = []
    const response = await fetch('https://englishapi.delphi.school/api/course');
    const data  = await response.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
}

