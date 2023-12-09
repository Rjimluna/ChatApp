import React from 'react';
import { auth } from '../firebase-config';

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
    <div className={`message ${messageClass}`}>
        <img alt='img' src={photoURL} />
        <p>{text}</p>
    </div>
    )
}

export default ChatMessage;