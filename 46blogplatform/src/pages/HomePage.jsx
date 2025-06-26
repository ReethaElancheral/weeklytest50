import { useLocalPosts } from "../data/PostContext";
import { BlogList } from "../components/BlogList";

export function HomePage() {
  const { posts } = useLocalPosts();
  return (
    <div>
      <h2>All Blog Posts</h2>
      <BlogList posts={posts} />
    </div>
  );
}