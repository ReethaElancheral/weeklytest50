import { useParams, useNavigate } from "react-router-dom";
import { useLocalPosts } from "../data/PostContext";
import { BlogForm } from "../components/BlogForm";

export function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, updatePost } = useLocalPosts();
  const post = getPost(id);

  const handleUpdate = (data) => {
    updatePost(id, { ...post, ...data });
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Edit Post</h2>
      <BlogForm initialData={post} onSubmit={handleUpdate} />
    </div>
  );
}