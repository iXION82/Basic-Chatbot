import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot } from 'supersimpledev'


export function TakeInput({ chatmsg, setChatMessages }) {
  const [inputText, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInput(event.target.value);
  }
  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);

    setInput('');
    const newMsg = [
      ...chatmsg,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]

    setChatMessages([
      ...newMsg,
      {
        message: 'Loading...',
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newMsg,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);
    setIsLoading(false);
  }

  function CheckTheKey(event) {
    if (event.key == 'Enter') {
      sendMessage();
    } else if (event.key == "Escape") {
      setInput('');
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div
      className="input-cont">
      <input
        placeholder="Send a message to the chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={CheckTheKey}
        className="chat-input"
      />
      <button
        className="send-button"
        onClick={sendMessage}
      >Send</button>
      <button
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>

  );
}
