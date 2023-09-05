import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Skeleton from "../components/Cards/Skeleton.tsx";
import { setItems } from '../redux/slices/cardsSlice.js';
import Cards from '../components/Cards/index.tsx';


const Home: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const skeletons = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

    useEffect(() => {
        const fetchCards = async () => {
            setIsLoading(true);

            try {
                await fetch(
                    `/api/books/`
                )
                    .then((res) => {
                        return res.json();
                    })
                    .then((json) => {
                        console.log(json.books)
                        dispatch(setItems(json.books));
                    });
            } catch (error) {
                alert('Ошибка запроса')
            } finally {
                setIsLoading(false);
            }

            window.scrollTo(0, 0);
        }
        fetchCards();
    }, [dispatch]);

    return (
        <div>
            <div className="header-bottom">
                <h1 className="header-bottom_title">
                    Connect, Share, Immerse
                </h1>
                <p className='header-bottom_desc'>
                    Words Shared, Worlds Explored
                </p>
            </div>
            <div className="container">
                <h2 className="content__title">Available now</h2>
                <div className="content__items">
                    {isLoading
                        ? skeletons
                        : showAll 
                        ? <Cards />
                        : <Cards slice={5} />}
                </div>
                {!showAll && (
                    <button className="button content__button" onClick={() => setShowAll(true)}>
                        See all
                    </button>
                )}
            </div>
        </div>
    )
}

export default Home;
