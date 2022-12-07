let initialState = {
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
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 7,
                send: action.newMessageText
            };
            return {
                ...state,
                newMessageText: ' ',
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export const addMessage = (newMessageText) => ({type:'ADD-MESSAGE', newMessageText});

export default dialogReducer;