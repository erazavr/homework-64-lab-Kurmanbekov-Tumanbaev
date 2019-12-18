import axios from 'axios'
const axiosPosts = axios.create({
    baseURL: 'https://homework-ernur.firebaseio.com/'
});
export default axiosPosts;