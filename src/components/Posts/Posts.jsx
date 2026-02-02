import { useLoaderData } from "react-router-dom";

import Post from "../Post/Post.jsx";

const Posts = () => {
  const post = useLoaderData();
  console.log("posts data", post);
  const style = {
    display:'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    flexDirection: 'column',
    margin: '0 auto ',
    padding:'20px',
    gap:'20px'
    
    
  }
  return (
    <div>
      this is posts components{post.length}
     <div style={style}>
         {post.slice(0, 14).map((data, index) => (
        <Post key={index} data={data} />
      ))}
     </div>

     
    </div>
  );
};

export default Posts;
