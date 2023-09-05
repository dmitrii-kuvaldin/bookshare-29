import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyLibraryBox from '../components/MyLibraryBox.tsx';
import axios from "axios";


const AddNewBook: React.FC = () => {
    
    const [createNewBook, setCreateNewBook] = useState({
        title: '',
        author: '',
        description: '',
        categoryId: '',
        language: '',
        pages: '',
        publisherDate: '',
        cover: '',
        owner: ''
    });
    console.log("AddNewBook")

    interface ICreateNewBook {
        title: string,
        author: string,
        description: string,
        categoryId: string,
        language: string,
        pages: string,
        publisherDate: string,
        cover: string,
        owner: string
    }

    const navigate = useNavigate();

    const bookCreating = async (createNewBook: ICreateNewBook) => {
        try {
            const data = await axios.post(`/api/books`, createNewBook);
            console.log("bookCreating", data)
            return data;
        } catch (error) {
            console.log("bookCreating",error)
        }
    }
    
    // const handleAddNewBookForm = (event: ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = event.target;
    //     setCreateNewBook((prev) => ({
    //         ...prev, [name]:value
    //     }))
    // }

    const handleAddBookForm = (event: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;
        setCreateNewBook((prev) => ({
            ...prev, [name]:value
        }))
    }

    // const handleAddNewBookSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    //     const {name, value} = event.target;
    //     setCreateNewBook((prev) => ({
    //         ...prev, [name]:value
    //     }))
    // }

    const handleAddNewBookSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const newBook = {
        //     ...createNewBook, owner: userId;
        // }
        try {
            const bookData = await bookCreating(newBook);
            if(bookData?.status===201) {
                navigate("/library");
            }
            console.log(bookData)
        } catch (error) {
            console.log(error)
        }
    }

        

    return (
        <div className='container'>
            <h2 className="content__title">
                Add New Book
            </h2>
            <div className="addNewBook__items content__items">
                <div>
                <MyLibraryBox />
                </div>
            <form onSubmit={handleAddNewBookSubmit} className='form addNewBook-wrap'>
                <div className='form__wrap addNewBook-wrap__top'>
                    <label  className='form__label' htmlFor="image">UPLOAD A BOOK COVER</label>
                    <input className='form__input' type="url" name="cover" onChange={handleAddBookForm} value={createNewBook.cover} />
                </div>
                <div className="addNewBook-wrap__center-left">
                <div className='form__wrap'>
                        <label  className='form__label' htmlFor="bookName">BOOK NAME</label>
                        <input className='form__input' type="text" name="title" onChange={handleAddBookForm} value={createNewBook.title}placeholder='Enter a book name' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="author">AUTHOR</label>
                    <input className='form__input' type="text" name="author" onChange={handleAddBookForm} value={createNewBook.author} placeholder='Enter a book author' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="genre">GENRE</label>
                    <select className='form__input' name="categoryId" onChange={handleAddBookForm} value={createNewBook.categoryId} >
                        <option value="" disabled>Choose genre</option>
                        <option value="1">Esse</option>
                        <option value="2">Detective</option>
                    </select>
                </div>

                </div>
                <div className="addNewBook-wrap__center-right">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="pages">PAGE NUMBERS</label>
                    <input className='form__input' type="number" name="pages" onChange={handleAddBookForm} value={createNewBook.pages} placeholder='Enter number of pages' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="year">YEAR OF PUBLICATION</label>
                    <input className='form__input' type="number" name="publisherDate" onChange={handleAddBookForm} value={createNewBook.publisherDate} placeholder='Enter year of publication' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="language">LANGUAGE</label>
                    <input className='form__input' type="text" name="language" onChange={handleAddBookForm} value={createNewBook.language} placeholder='Enter a book language' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="language">OWNER</label>
                    <input className='form__input' type="text" name="owner" onChange={handleAddBookForm} value={createNewBook.owner} placeholder='Enter a book language' />
                </div>

                </div>
                
                <div className="addNewBook-wrap__bottom">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="desc">DESCRIPTION</label>
                    <textarea className='form__input' name="description" onChange={handleAddBookForm} value={createNewBook.description} placeholder='Write a description of a book' />
                </div>
                <div >
                    <button type='submit' className='button button-profile'>Add</button>
                    <button type='reset' className='button button-profile button-profile__right'>Cancel</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    )}

    export default AddNewBook;