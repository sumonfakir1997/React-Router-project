import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, email, phone, website, username, address, company } =
    userDetails;
  console.log("user details", userDetails);
  return (
    <div>
      <h3>users details about user</h3>
      <h4>name {name}</h4>
      <p>email : {email}</p>
      <p>phone : {phone}</p>
      <p>website : {website}</p>
      <p>username : {username}</p>
      <p>compay name {company.name}</p>
      <h4>Address :</h4>
      <p>street : {address.street}</p>
      <p>suite : {address.suite}</p>
      <p>city : {address.city}</p>
      <p>zipcode : {address.zipcode}</p>
    </div>
  );
};

export default UserDetails;
