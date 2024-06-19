import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ef4b1ae0362d4600a999bfce55475c46'
    }
})