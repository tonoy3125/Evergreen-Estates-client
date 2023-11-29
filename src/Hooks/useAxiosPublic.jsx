import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://evergreen-estates-server-assignment.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;