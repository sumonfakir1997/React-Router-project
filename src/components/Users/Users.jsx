import { useLoaderData } from "react-router-dom";

import User from "../User/User.jsx";
const Users = () => {
  const users = useLoaderData();

  //normalily amara ja korlam data load korar jonno seta hosce
  // ekta state nitelam
  // useEffect diye api call kortam
  // data niye oi state e set kortam
  // then oi state theke data niye amra jsx e dekhaitam

  //************* */

  //kintu react router amader jonno ekta onno system dise data load korar jonno
  // seta hosce loader system
  //eta amra route er vitor e define kortam
  // then ja data load korbe seta amra component er vitor e useLoaderData namok ekta hook diye data ta nite parbo

  const  style = {
    display:'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    background:'red',
    flexDirection: 'column',
    margin: '0 auto ',
    padding:'20px',
    gap:'20px'
    
  }
  return (
    <div>
      <h2>Our users {users.length} </h2>
      <div style={style}>
        {users.map((user, index) => (
          <User key={index} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
