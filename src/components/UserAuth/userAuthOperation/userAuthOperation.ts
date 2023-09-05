import { ICreateNewUser } from "../initUser.ts";
import axios from "axios";

export const userLogin = async ({email, password}: ICreateNewUser) => {
    const userLogin = `username=${email}&password=${password}`;
    try {
        const data = await axios.post(`/api/login`, userLogin, {
            withCredentials: true,
        });
        console.log("userLogin", data)
        return data;
    } catch (error) {
        console.log("userLogin", error)
    }
};

export const userRegistr = async (createNewUser: ICreateNewUser) => {
    try {
        const {data} = await axios.post(`/api/registration`, createNewUser);
        console.log("userRegistr", data)
    } catch (error) {
        console.log("userRegistr",error)
    }
}

export const getUser = async () => {
    try {
        const data = await axios.get(`/api/users/me`, { withCredentials: true});
        console.log("userRegistr", data);
        return data;

    } catch (error) {
        console.log("userRegistr",error)
    }
}
