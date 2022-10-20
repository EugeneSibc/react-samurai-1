let initialState = {
    friends: [
        {id: 1, name: "Dimych", img: 'https://html5css.ru/howto/img_avatar.png'},
        {id: 2, name: "Sveta", img: 'https://html5css.ru/howto/img_avatar2.png'},
        {id: 3, name: "Mila", img: 'https://www.w3bai.com/w3css/img_avatar5.png'}
    ]
};


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
}


export default sidebarReducer;
