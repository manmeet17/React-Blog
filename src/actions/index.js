import axios from 'axios';
export const FETCH_POST="FETCH_POST";

const API_KEY="?key=manmeet";

export function fetchPost(){
    const request=axios.get(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`);
    return{
        type: FETCH_POST,
        payload: request
    }
}