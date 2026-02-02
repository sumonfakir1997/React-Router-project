import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "../src/components/Home/Home.jsx";
import About from "../src/components/About/About.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import UserDetails from "./components/Userdetails/UserDetails.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users/Users.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Postdetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      // ay khane :cardId hosce dynamic segment ja dibo setai nibe
      {
        path: "user/:cardId",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.cardId}`
          );
          if (!res.ok) {
            // throw a Response so the router will render the errorElement
            throw new Response("Not Found", {
              status: res.status,
              statusText: res.statusText,
            });
          }
          return res.json();
        },
        element: <UserDetails />,
        errorElement: (
          <div style={{ padding: 20 }}>
            <h2>User not found</h2>
            <p>Could not load the user. Please try again.</p>
            <button onClick={() => window.history.back()}>Go back</button>
          </div>
        ),
      },

      {
        path: "/posts",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts/>
      },
      
      {
        path:"/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails/>
      }

      // nichar agola shikar jonno try korcilam
      // {
      //   path:"/about",
      //   element:<div>About Page</div>
      // },
      // {
      //   path:"contact",
      //   element:<div>contact</div>
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
