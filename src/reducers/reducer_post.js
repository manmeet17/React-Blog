import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state={},action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id'); 
        case FETCH_POST:
            const post=action.payload.data;
            console.log("Prev state: ",state)
            const newState= {...state };
            newState[post.id]=post;
            console.log("New state: ",newState);            
            return newState;
        case DELETE_POST:
            const delPost=action.payload.data;
            console.log("Deleting post ",delPost);
        default:
            return state;
    }
}