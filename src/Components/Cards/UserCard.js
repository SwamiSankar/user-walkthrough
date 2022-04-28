import React, { useEffect, useRef } from 'react';

const UserCard = ({ type, heading, message }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.focus();
  }, [containerRef]);

  return (
    <div
      className={`${type}-user-card-container`}
      ref={containerRef}
      tabIndex="-1"
    >
      <img
        src={`/${type}-user.png`}
        alt="card-logo"
        className="user-card-logo"
      />
      <h4 className="user-card-heading">{heading}</h4>
      <p className="user-card-message">{message}</p>
    </div>
  );
};

export default UserCard;
