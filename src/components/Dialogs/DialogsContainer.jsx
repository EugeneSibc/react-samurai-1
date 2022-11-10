import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



/*const Dialogs = (props) => {


    let dialogsElement = props.data.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.data.messages.map(m => <Message message={m.send}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let messageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
                <textarea onChange={messageChange}
                          ref={newMessage}
                          value={props.data.newMessageText}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}*/

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


export default
    connect(mapStateToProps, mapDispatchToProps)(Dialogs);