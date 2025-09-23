import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bfa7633e9fb84628b2ea49e94e158f52'
  }
})