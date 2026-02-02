import React from "react";
import { Link } from "react-router-dom";

const User = ({user}) => {
  const {id, name, phone, website, email, username } = user;

  const style = {
    padding: "40px",
    background: "green",
    cursor: "pointer",
    maxWidth: "400px",
  };

  const button = {
    width:'100% '
  }

  console.log("usersss", user);

  return (
    <div style={style}>
      <p> name :{name}</p>
      <p> email :{email}</p>
      <p> phone :{phone}</p>
      <p>website :{website}</p>
      <p>username :{username}</p>

     
      <Link to={`/user/${id}`}>
       <button style={button}>
          show detailes 
      </button>
    
      </Link>
      
    </div>
  );
};

export default User;
