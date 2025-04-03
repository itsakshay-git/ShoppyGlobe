/**
 * @component Toast
 * @desc A component that displays a toast notification with a message and a type (success, error, etc.).
 * The toast automatically disappears after 3 seconds or can be manually closed by the user.
 * 
 * @param {Object} props - The props passed to the Toast component.
 * @param {string} props.message - The message to be displayed in the toast notification.
 * @param {string} props.type - The type of the toast (e.g., 'success', 'error', 'info').
 * @param {Function} props.onClose - A function to handle the closing of the toast notification.
 */


import { useState, useEffect } from "react";
import "./toast.css";

const Toast = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    visible && (
      <div className={`toast toast-${type}`}>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    )
  );
};

export default Toast;
