import React from "react";
import { useState, useEffect } from "react";
import Notification from "./Notification.jsx";
import { notifications as data } from "../data/notifications.js";
import "./NotificationsPanel.css";

function NotificationsPanel() {
  let [datos, setDatos] = useState(data);
  let [unreadNotifications, setUnreadNotifications] = useState("");

  const handleMarkAllRead = () => {
    setDatos(
      datos.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const handleMarkRead = (notificationId) => {
    setDatos(
      datos.map((notification) => {
        if (notification.id === notificationId) {
          return {
            ...notification,
            read: true,
          };
        }
        return notification;
      })
    );
  };

  useEffect(() => {
    setUnreadNotifications(
      datos.filter((notification) => notification.read === false).length
    );
  }, [datos]);

  return (
    <main className="card">
      <header className="card__header">
        <div className="card__header-counter">
          <h1 className="card__header-counter-text">Notifications</h1>
          <span className="card__header-counter--number">
            {unreadNotifications}
          </span>
        </div>

        <button
          className="card__header-button ishover"
          onClick={() => {
            handleMarkAllRead();
          }}
        >
          Mark all as read
        </button>
      </header>

      <section className="card__notifications">
        <ul className="card__notifications-list">
          {datos.map((notification) => (
            <Notification
              key={notification.id}
              read={notification.read}
              avatar={notification.avatar}
              name={notification.name}
              action={notification.action}
              hover={notification.hover}
              time={notification.time}
              picture={notification.picture}
              message={notification.message}
              messageText={notification.messageText}
              click={() => handleMarkRead(notification.id)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default NotificationsPanel;
