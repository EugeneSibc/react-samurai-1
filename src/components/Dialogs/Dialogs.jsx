import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength50 = maxLengthCreator(50)
const SendMessage = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='message' placeholder="Send message"
                       validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const SendMessageRedux = reduxForm({form:'message'})(SendMessage)

const  Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.send}/>);

    let AddMessage = (value) => {
        props.addMessage(value.message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
                <SendMessageRedux onSubmit={AddMessage}/>

            </div>
        </div>
    )
}

export default Dialogs;