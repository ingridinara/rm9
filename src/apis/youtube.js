import axios from 'axios';
const KEY =   'AIzaSyBzZ8irzZWnC_y_5mYS7CpW9dRcNxYlJT0';
 

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY
    }
})