import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    // Prevent sending empty messages
    if (inputText.trim() === '') {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);

    setInputText(''); //clear the input text to none
  }

  // New function to handle the 'Enter' key press
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to the chatBOT!"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown} // We added this event listener
        value={inputText} ///value lets us change the value in the input
        className="chat-input"
      />

      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}