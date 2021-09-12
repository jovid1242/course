import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js' 
import Home from '../components/Home.js' 

const Index = ({book, film}) => {
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Курс</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <Home book={book.books} film={film.films} />
            </section>
        </>
    );
}

export default Index;

export async function getStaticProps(context) {
    // let data = []
    const response = await fetch('https://englishapi.delphi.school/api/book');
    const book  = await response.json()
    const resFilm = await fetch('https://englishapi.delphi.school/api/film');
    const film  = await resFilm.json()
    return {
      props: {book, film}, // will be passed to the page component as props
    }
}
