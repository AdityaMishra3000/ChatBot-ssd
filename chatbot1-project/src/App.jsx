import { useState } from 'react'
import './App.css'
import ChatMessages from './components/ChatMessages.jsx'
import {ChatInput} from './components/ChatInput.jsx'


function App(){
  const [chatMessages,setChatMessages] = useState([{
    message:'hello ChatBot',
    sender:'user',
    id:'id1'
  },{
    message:'Hello! How can i help you?',
    sender:'robot',
    id:'id2'
  },
  {
    message:'Todays Date ?',
    sender:'user',
    id:'id3'
  },
  {
    message:'Today is September 23',
    sender:'robot',
    id:'id4'
  }]);
  // const[chatMessages,setChatMessages]=array; ---->2
  // const chatMessages=array[0];    --->1
  // const setchatMessages=array[1];    --->1
  return(
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
