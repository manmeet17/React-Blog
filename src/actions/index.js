import axios from 'axios';
export const FETCH_POSTS="FETCH_POSTS";
export const FETCH_POST="FETCH_POST";
export const CREATE_POST="CREATE_POST";
export const DELETE_POST="DELETE_POST";

const API_KEY="?key=manmeet";

export function fetchPosts(){
    const request=axios.get(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values,callback){
    const request=axios.post(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`,values).then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    const request=axios.get(`http://reduxblog.herokuapp.com/api/posts/${id}${API_KEY}`);
    
    return{
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id,cb){
    const request=axios.delete(`http://reduxblog.herokuapp.com/api/posts/${id}${API_KEY}`).then(() => cb());
    
    return{
        type: DELETE_POST,
        payload: id
    }
}