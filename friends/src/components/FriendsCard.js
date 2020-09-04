import React from 'react';
import "./friendsCard.styles.css";

const FriendsCard = props => {

  const { name, age } = props.friend;

  return(
    <div className="friends_card">
        <h2>{name}</h2>
        <h5>Age: {age}</h5>
    </div>
  );
};

export default FriendsCard;