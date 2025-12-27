import { useState } from 'react'
import { TakeInput } from './Components/takeInput.Jsx';
import { ChatMessage } from './Components/Chatmessage';
import './App.css'

function App() {

  const array = useState(
    []
  );
  const chatmsg = array[0];
  const setChatMessages = array[1];

  return (
    <div className="js-container">
      <ChatMessage
        chatmsg={chatmsg}
        setChatMessages={setChatMessages}
      />
      <TakeInput
        chatmsg={chatmsg}
        setChatMessages={setChatMessages}
      ></TakeInput>
    </div>
  );
}


export default App
