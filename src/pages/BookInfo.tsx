import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';



interface IBooks {
    bookId: number,
    title: string,
    author: string,
    description: string,
    category: string,
    language: string,
    pages: number,
    publisherDate: number,
    cover: string,
    location: string,
    queueSize: number
}

interface IItems {
    items: IBooks[];
}

interface IBooksObject {
    cards: IItems,
}


const BookInfo: React.FC<IBooks> = ({
    bookId,
    title,
    author,
    description,
    category,
    language,
    pages,
    publisherDate,
    cover,
    location,
    queueSize
}) => {

    const items = useSelector((state:IBooksObject) => state.cards.items);
    console.log("items", items);

    const {id} = useParams();
    console.log(id);

    const oneBook = items.find((item) => `${item.bookId}` === id );
    console.log(oneBook);

    useEffect(() => {})


    return (
        <div>
            <div>
            <img src={oneBook?.cover} alt="Book" />
            </div>
            <div>
                <p>{oneBook?.title}</p>
                <p>{author}</p>
                <p>{category}</p>
                <p>{language}</p>
                <p>Description: {description}</p>
                <p>Number of pages: {pages}</p>
                <p>Year of publication: {publisherDate}</p>
                <p>Wait line: {queueSize}</p>
                <p>Current location: {location}</p>
                <p>{title}</p>
            </div>
            <button className='button'>Get book</button>
        </div>
    )}

    export default BookInfo;