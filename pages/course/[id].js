import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Course from '../../components/Course'
import Sidebar from '../../components/Sidebar' 
import http from '../../http.js'

export default function Idcourse({lessions}) {
    const {query} = useRouter() 
    return (
        <>
                <Head>
                    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' /> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
                </Head>
                <Sidebar />               
                <section className="home-section">
                    <Course lessions={lessions} />
                </section> 
        </>
    )
}

export async function getServerSideProps({params}) {
    let lessions = []
    await http.get(`/course/${params.id}/lession`)
    .then(res => lessions = res.data.lessions)
    return {
        props: {lessions}, // will be passed to the page component as props
    }
}