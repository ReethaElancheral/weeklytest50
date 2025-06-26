export function BlogView({ post }) {
  return (
      <div className="blog-card blog-view">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>{post.tags?.join(", ")}</small>
    </div>
  );
}