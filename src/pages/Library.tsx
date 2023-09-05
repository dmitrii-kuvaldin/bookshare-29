import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { Link, useNavigate } from 'react-router-dom';
import MyLibraryBox from '../components/MyLibraryBox.tsx';
// import Cards from '../components/Cards/index.tsx';

interface IBooks {
    bookId: number,
    title:string,
    cover: string,
    author:string,
    category:string,
    language:string
}

interface IItems {
    items: IBooks[];
}

interface IBooksObject {
    cards: IItems,
}

const Library: React.FC = () => {
    
    const items = useSelector((state:IBooksObject) => state.cards.items);
    console.log("items", items);

    const navigate = useNavigate();

    const getBookById = (bookId: number) => {
        navigate(`/bookInfo/${bookId}`)
        console.log(bookId)
    }


    useEffect(() => {console.log("Library")});
    return (
        <div className='container'>
            <h2 className="content__title">My Library</h2>
            <div className='content__items'>
                <div>
                    <MyLibraryBox />
                    <Link to="/addBook"> Add new books</Link>
                </div>
                {/* <Cards /> */}
                <div>
            {items.map(({ bookId, title, author, category, language, cover }) => (
                
                <div key={bookId} className="card-block-wrapper">
                    <div className="card-block">
                        <img className="card-block__image" src={cover} alt="card" />
                        <div className="card-block-desc">
                            <p className="card-block-desc__top">{title}</p>
                            <p className="card-block-desc__top">{author}</p>
                            <p className="card-block-desc__bottom">{category}</p>
                            <p className="card-block-desc__bottom">{language}</p>
                            <button className="button button-card" onClick={() => getBookById(bookId)}> More info </button>
                        </div>
                    </div>
                </div>
                ))}
                </div>

            </div>
        </div>
    )
}

export default Library;

