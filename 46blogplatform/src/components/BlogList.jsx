import { BlogCard } from "./BlogCard";

export function BlogList({ posts }) {
  return (
      <div className="blog-list">
      {posts.length === 0 ? <p>No posts found.</p> : posts.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}