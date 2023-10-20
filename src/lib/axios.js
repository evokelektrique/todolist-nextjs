import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

axios.interceptors.response.use(
    (response) => {
        // You can do something with the successful response here
        return response;
    },
    (error) => {
        // Handle global errors here
        // For example, you can log the error or redirect the user to an error page.
        return Promise.reject(error);
    }
);

export default axios
