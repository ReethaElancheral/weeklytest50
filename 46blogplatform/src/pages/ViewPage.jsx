import { useParams } from "react-router-dom";
import { useLocalPosts } from "../data/PostContext";
import { BlogView } from "../components/BlogView";

export function ViewPage() {
  const { id } = useParams();
  const { getPost } = useLocalPosts();
  const post = getPost(id);
  return (
    <div className="page">
      <BlogView post={post} />
    </div>
  );
}