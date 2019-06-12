import axios from 'axios'

const KEY = 'AIzaSyBLr_3nl1v7t3SqN8WgoGvffSCfx5LZtYc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})
