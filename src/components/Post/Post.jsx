import { Link, useNavigate } from "react-router-dom";
const Post = ({ data }) => {
  const navigate = useNavigate();
  console.log("post data in post component", data);

  const { userId, title, id } = data;

  const style = {
    padding: "40px",
    background: "white",
    cursor: "pointer",
    maxWidth: "300px",
    color: "black",
    border: "1px solid gray",
  };
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={style}>
      this is post components
      <h4>title : {title}</h4>
      <p>
        user id and id {id} and {userId}
      </p>
      <button onClick={handleNavigate}>Post details</button>
    </div>
  );
};

export default Post;
