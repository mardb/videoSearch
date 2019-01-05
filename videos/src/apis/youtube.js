import axios from 'axios';

const KEY = "AIzaSyBcDxjZsQBP256Jlobgkp2yQ69RweMyfv4";

export default axios.create({
baseURL:  'https://www.googleapis.com/youtube/v3',
params: {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
}
});