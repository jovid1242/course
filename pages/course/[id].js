import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Course from '../../components/Course'
import Sidebar from '../../components/Sidebar' 
// import Script from 'next/script' 
// import ErrorPage from '../404.js'

export default function Idcourse() {
    const {query} = useRouter() 
    // console.log(query);
    // if (!query) {
    //     return <ErrorPage statusCode={404} />
    //   }
    // const rellax = new Rellax('.rellax');
    return (
        <>
                <Head>
                    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' /> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
                </Head>
                <Sidebar />
                {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" integrity="sha512-f5HTYZYTDZelxS7LEQYv8ppMHTZ6JJWglzeQmr0CVTS70vJgaJiIO15ALqI7bhsracojbXkezUIL+35UXwwGrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.js" integrity="sha512-qk0XupXlge1h9I63+bC7K8850xgWnUjTgSNkfLnsqc7dWdx4031UbKjKs2cuRxsNXymkSjyzSCiryVouU74zkg==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script> */}
               
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