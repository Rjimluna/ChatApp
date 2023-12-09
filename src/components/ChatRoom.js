import React, { useState, useEffect, useRef } from "react";
import firebase from 'firebase/app';
import { auth, firestore } from '../firebase-config';

import SignOut from "./SignOut";
import ChatMessage from "./Chatmessages";

function ChatRoom() {

    const dummy = useRef()

    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState('');

    const messagesRef = firestore.collection('messages');

    useEffect(() => {
        const query = messagesRef.orderBy('createdAt').limit(25);

        const unsubscribe = query.onSnapshot(snapshot => {
        const messagesData = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
        setMessages(messagesData);
        });

        return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendMessage = async(e) => {

        e.preventDefault()

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')

        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <main>
            <SignOut />
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <div ref={dummy}></div>
        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

            <button type='submit'>Submit</button>

        </form>
        </>
    );
}

export default ChatRoom;