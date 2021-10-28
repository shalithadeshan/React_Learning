import { Link } from "react-router-dom";
const NotFount = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot found</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFount;
