import React, {useEffect , useState} from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js' 
import Main from '../components/Search.js'
import http from '../http.js'

const Search = ({book}) => {
// const [state, setstate] = useState([])
    return (
        <>
        <Head>
            <meta keywords="course, english, course1" ></meta>
            <title>Поиск</title>
            <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        </Head>
            <Sidebar />
            <section className="home-section">
                <Main book={book.books} />
            </section>
        </>
    );
}

export default Search;

export async function getStaticProps(context) {
    const response = await fetch('https://englishapi.delphi.school/api/book');
    const book  = await response.json()
    return {
      props: {book}, // will be passed to the page component as props
    }
}
