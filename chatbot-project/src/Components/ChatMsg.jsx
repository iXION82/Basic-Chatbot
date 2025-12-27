import RobotImg from '../assets/robot.png'
import UserImg from '../assets/user.png'

export function ChatMsg(props) {
  const message = props.message;
  const sender = props.sender;

  return (
    <div
      className={sender === 'user' ? "user" : "robot"}
    >
      {sender === 'robot' && (
        <img className="img" src={RobotImg} width="50px" alt=""></img>
      )}
      <p
        className="para"
      >{message}</p>
      {sender === 'user' && (
        <img className="img" src={UserImg} width="50px"></img>
      )}
    </div>
  );
}

