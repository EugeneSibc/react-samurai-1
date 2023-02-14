import React from 'react';
import profileReducer, {addPost, deletePost} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, everyone!', likesCount: 'likes: 0'},
        {id: 2, message: 'Its my first post!', likesCount: 'likes: 4'},
        {id: 3, message: 'Im alredy', likesCount: 'likes: 11'},
        {id: 4, message: 'Hi, everyone!', likesCount: 'likes: 1'},
    ],
    profile: null,
    status:'---'
};

it('length of posts should be incremented', ()=>{
    //1.test data
    let action = addPost('it-kamasutra.com');
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5);
})

//TDD first
it('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
})