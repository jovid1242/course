import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Course from '../../components/Course'
import Sidebar from '../../components/Sidebar'
// import ErrorPage from '../404.js'

export default function Idcourse() {
    const {query} = useRouter()
    // console.log(query);
    // if (!query) {
    //     return <ErrorPage statusCode={404} />
    //   }
    return (
        <>
                <Head>
                    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' /> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
                </Head>
                <Sidebar />
                <section className="home-section">
                    <Course />
                </section> 
        </>
    )
}

export async function getServerSideProps({params}) {
    return {
        props: {}, // will be passed to the page component as props
    }
}