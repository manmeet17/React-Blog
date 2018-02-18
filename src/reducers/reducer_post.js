import {FETCH_POSTS, FETCH_POST} from '../actions';
import _ from 'lodash';

export default function(state={},action){
    switch(action.type){
        case FETCH_POSTS:
            console.log(action.payload.data)
            return _.mapKeys(action.payload.data,'id'); 
        case FETCH_POST:
            const post=action.payload.data;
            console.log("Prev state: ",state)
            const newState= {...state };
            console.log("New state: ",newState);
            newState[post.id]=post;
            return newState;
        default:
            return state;
    }
}