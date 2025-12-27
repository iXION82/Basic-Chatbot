import { useEffect, useState } from 'react'
import { Chatbot } from 'supersimpledev';
import { TakeInput } from './Components/takeInput.Jsx';
import { ChatMessage } from './Components/Chatmessage';
import './App.css'

function App() {

  const array = useState(JSON.parse(localStorage.getItem('messages')) ||
    []
  );
  const chatmsg = array[0];
  const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatmsg));
  }, [chatmsg]);

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
