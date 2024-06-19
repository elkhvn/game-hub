import axios from "axios";


axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ef4b1ae0362d4600a999bfce55475c46'
    }
})