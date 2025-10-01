import RobotProfilePicture from '../assets/robot.png'
import UserProfilePicture from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage(props){//2>>function ChatMessage({message,sender}){code }
  const message = props.message;
  const sender = props.sender;
  //2>>const {message,variable}=props;
  
  // 1>>if(sender=='robot'){
  //   return(
  //   <div>
  //     <img src="robot.png" width="50"/>
  //     {message}
  //   </div>
  //   );
  // }

  return (
    <div className={
      sender==='user'?
      'chat-message-user':
      'chat-message-robot'
    }>
      {sender === 'robot' &&( 
        <img src={RobotProfilePicture} width="50"/>
      )}<div
        className='chat-message-text'>
          {message}
        </div>
      {sender === 'user' && (
        <img src={UserProfilePicture} width="50"/>
      )}
    </div>
  );
}
