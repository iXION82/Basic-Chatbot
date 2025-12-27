import { useRef, useEffect } from 'react'
import { ChatMsg } from './ChatMsg';

export function ChatMessage({ chatmsg }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatmsg]);

  return (
    <>
      {chatmsg.map((chatmessage) => (
        <ChatMsg
          message={chatmessage.message}
          sender={chatmessage.sender}
          key={chatmessage.id}
        />
      ))}
      <div ref={bottomRef}></div>
    </>
  );
}

