import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router";








const  Dialogs = (props) => {
    /*let state = props.dialogsPage;*/

    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.send}/>);
   /* let newMessageText = state.newMessageText;*/

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage()
    }

    let messageChange = () => {
        let text = newMessage.current.value;
        props.updateMessageText(text);
    }

    /*if(!props.isAuth){
        return <Navigate to='/login'/>
    }*/
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
                <textarea onChange={messageChange}
                          ref={newMessage}
                          value={props.newMessageText}
                />
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;