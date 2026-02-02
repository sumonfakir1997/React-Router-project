import { useLoaderData,useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
  const post = useLoaderData();
  console.log("post details data", post);

  const { title, body, id, userId } = post;

  const style = {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "400px",
    border: "1px solid gray",
    background: "white",
    color: "black",
  };
  const handleGoBack =()=> {
    navigate(-1) // navigate to the previous page mane -1
  }
  return (
    <div style={style}>
      post details component
      <h2>{title}</h2>
      <p>
        post id : {id} and user id : {userId}
      </p>
      <p>{body}</p>

      <button onClick={() => handleGoBack()}>go back</button>
    </div>
  );
};

export default PostDetails;
