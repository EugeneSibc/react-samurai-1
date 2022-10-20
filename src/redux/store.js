import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, everyone!', likesCount: 'likes: 0'},
                {id: 2, message: 'Its my first post!', likesCount: 'likes: 4'},
                {id: 3, message: 'Im alredy', likesCount: 'likes: 11'},
                {id: 4, message: 'Hi, everyone!', likesCount: 'likes: 1'},

            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Mila"},
                {id: 4, name: "Jenya"},
                {id: 5, name: "Ivan"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, send: "Hi everyone!"},
                {id: 2, send: "It my first message"},
                {id: 3, send: "How are you?"},
                {id: 4, send: "How your IT-Kamasutra?"}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dimych", img: 'https://html5css.ru/howto/img_avatar.png'},
                {id: 2, name: "Sveta", img: 'https://html5css.ru/howto/img_avatar2.png'},
                {id: 3, name: "Mila", img: 'https://www.w3bai.com/w3css/img_avatar5.png'}
            ]
        }
    },
    _callSubscriber() {
        console.log('React run run run!')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    /*addPost() {
        let newPost = {
            id:6,
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage () {
        let newMessage = {
            id: 7,
            send: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateMessageText(messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    },*/
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;