import axios from 'axios';

export const getBooks = async () => {
  try {
    const data = await axios.get(`/api/books`, { withCredentials: true });
    console.log("getBooks", data);
    return data;

  } catch (error) {
    console.log("getBooks", error)
  }
}

export const getWaitingBooks = async (id) => {
  try {
    const data = await axios.get(`/api/books/waiting/${id}`);
    console.log("getWaiting", data);
    return data;

  } catch (error) {
    console.log("getWaiting", error)
  }
}

export const getSendBooks = async (id) => {
  try {
    const data = await axios.get(`/api/books/send/${id}`);
    console.log("getWaiting", data);
    return data;

  } catch (error) {
    console.log("getWaiting", error)
  }
}
