import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6d7b6.firebaseio.com/'
});

export default instance;