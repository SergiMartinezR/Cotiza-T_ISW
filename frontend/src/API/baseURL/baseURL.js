import axios from 'axios';

const instance = axios.create(
    {
        // baseURL: "http://localhost:8000/"
        baseURL: "https://f8bc-2806-2f0-9340-610-281b-4354-b2e3-21db.ngrok.io/"
    }
);

export default instance;