import { useState, useEffect } from "react";
import useFetch from "../shared/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  // const name = 'Shalitha';
  // const [name, setName] = useState('Shalitha'); // to change value on click we have to use useState hook
  // const handleClick = (e) => {
  //     setName('Deshan');
  //     console.log("clicked", e);
  // };

  //   const [blogs, setBlogs] = useState([
  //     { title: "My new Website", body: "lorem......", author: "Shalitha", id: 1 },
  //     { title: "Welcome to party", body: "lorem......", author: "Yehan", id: 2 },
  //     { title: "WEb div top tips", body: "lorem......", author: "Deshan", id: 3 },
  //   ]);
  //   const [blogs, setBlogs] = useState(null);

  //   //   const [name, setName] = useState("Shalitha");
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const {
    data: blogs, // blogs is the response from the server grab data use use blogs
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  //   pass function as props to BlogList
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  // const handleClickAgain = (name, e) => {
  //     console.log("hello", name, e.target);
  // };
  // this is how to handle passed value from the HTML

  // useEffects run in every render cycle even if the change data
  //   useEffect(() => {
  //     // console.log("useEffect");
  //     setTimeout(() => {
  //       fetch("http://localhost:8000/blogs")
  //         .then((res) => {
  //           if (!res.ok) {
  //             throw Error("res.statusText");
  //           }
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setBlogs(data);
  //           setIsLoading(false);
  //           setError(null);
  //         })
  //         .catch((err) => {
  //           //   console.log(err.message);
  //           setIsLoading(false);
  //           setError(err.message);
  //         });
  //     }, 1000);
  //   }, []);
  // [] empty dependency array means it will run only once when the component is rendered (just like onInit in angular)
  return (
    <div className="home">
      {/*<h2>Home</h2>*/}
      {/*<p>{name}</p>*/}
      {/*<button onClick={handleClick}>Click Me</button>*/}
      {/*<button onClick={(e) => handleClickAgain("Shalitha", e)}>*/}
      {/*    Click Me Again*/}
      {/*</button>*/}
      {/*this is how to pass value to button click*/}
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"Blog List"}
          //   handleDelete={handleDelete}
        />
      )}{" "}
      {/* conditionally render the component*/}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Shalitha")}
        title={"Shalitha's Blogs"}
      /> */}
      {/*pass blogs to BlogList component using props*/}
      {/* <button onClick={() => setName("Deshan")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
