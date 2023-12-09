import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase-config'

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='App'>
      <header></header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
