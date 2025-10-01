import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'


export function ChatInput({chatMessages,setChatMessages}){
  const [inputText,setInputText]=useState('')

  function saveInputText(event){
    setInputText(event.target.value);
  }

  
  function sendMessage(){
    const newChatMessages=[
      ...chatMessages,
      {
        message:inputText,
        sender:'user',
        id:crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    // console.log(response);
    setChatMessages([
      ...newChatMessages,
      {
        message:response,
        sender:'robot',
        id:crypto.randomUUID()
      }
    ]);

    setInputText('');//clear the input text to none
  }
return (
  <div className="chat-input-container">
    <input
      placeholder="Send a message to the chatBOT!" 
      size="30"
      onChange={saveInputText}
      value={inputText}///value lets us change the value in the input
      className="chat-input"
      />
       
    <button
      onClick={sendMessage}
      className="send-button"
    >Send</button>
  </div>
);
}