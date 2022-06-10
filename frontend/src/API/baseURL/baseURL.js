import axios from 'axios';

const instance = axios.create(
    {
        // baseURL: "http://91d7ddfbae13.ngrok.io"
        // baseURL: "http://0d8c55b48a6d.ngrok.io"
        // baseURL: "http://445a2038d9d1.ngrok.io"
        //baseURL: "http://localhost:8000/"
        baseURL: "https://21ef-2806-2f0-9340-610-281b-4354-b2e3-21db.ngrok.io/"
    }
);

export default instance;