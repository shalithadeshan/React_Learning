import { Link } from "react-router-dom";
// const BlogList = (props) => {
const BlogList = ({ blogs, title, handleDelete }) => {
  // const blogs = props.blogs; // access blog data using props
  // const title = props.title;
  return (
    <div className={"blog-list"}>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
