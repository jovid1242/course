import React from 'react'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar.js' 
import LessonComponent from '../../components/Lession.js'
import http from '../../http.js'

const lession = ({lession}) => {
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Курс</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <LessonComponent lession={lession} />
            </section>
        </>
    );
}

export default lession;

export async function getServerSideProps({params}) {
    let lession = []
    await http.get(`/course/lession/${params.id}`)
    .then(res => lession = res.data.lession)
    return {
        props: {lession}, // will be passed to the page component as props
    }
}
