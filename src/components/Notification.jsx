import "./Notification.css";

function Notification(props) {
  const {
    click,
    read,
    avatar,
    name,
    action,
    hover,
    time,
    picture,
    message,
    messageText,
  } = props;

  return (
    <li>
      <div
        className={!read ? "notification unread" : "notification read"}
        onClick={click}
      >
        <div className="notification__avatar">
          <img className="notification__avatar-img" src={avatar} alt={name} />
        </div>

        <div className="notification__text">
          <p className="notification__text-content">
            <b className="user-name ishover">{name}</b> <span>{action}</span>{" "}
            <a href="#">
              <b className="post ishover">{hover}</b>
            </a>
          </p>
          <p className="notification__text-time">{time}</p>
          <div className={message ? "notification__message" : ""}>
            <p className={message ? "notification__message-content" : ""}>
              {messageText}
            </p>
          </div>
        </div>

        <div className={picture ? "notification__picture" : ""}>
          {picture ? (
            <img className="notification__picture-img" src={picture} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Notification;
