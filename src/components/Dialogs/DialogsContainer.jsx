import React from 'react';
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMessage} from "../../redux/dialog-reducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessage(newMessageText))
        }
    }
}
export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);