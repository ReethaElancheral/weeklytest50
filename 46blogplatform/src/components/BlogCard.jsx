import { Link } from "react-router-dom";

export function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.content.slice(0, 100)}...</p>
      <small>{post.tags?.join(", ")}</small>
      <div>
        <Link to={`/post/${post.id}`}>Read More</Link>
        <Link to={`/edit/${post.id}`}>Edit</Link>
      </div>
    </div>
  );
}
