import dayjs from 'dayjs';
import RobotImg from '../assets/robot.png'
import UserImg from '../assets/user.png'


export function ChatMsg(props) {
  const message = props.message;
  const sender = props.sender;
  const time = props.time;

  return (
    <div
      className={sender === 'user' ? "user" : "robot"}
    >
      {sender === 'robot' && (
        <img className="img" src={RobotImg} width="50px" alt=""></img>
      )}
      <div className="para">
        {message}

        {(
          <div className='message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>
      {sender === 'user' && (
        <img className="img" src={UserImg} width="50px"></img>
      )}
      
    </div>
  );
}

