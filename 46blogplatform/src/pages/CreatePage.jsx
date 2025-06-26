import { useNavigate } from "react-router-dom";
import { useLocalPosts } from "../data/PostContext";
import { BlogForm } from "../components/BlogForm";
import { v4 as uuidv4 } from "uuid";

export function CreatePage() {
  const navigate = useNavigate();
  const { addPost } = useLocalPosts();

  const handleCreate = (data) => {
    addPost({ id: uuidv4(), ...data, createdAt: new Date().toISOString() });
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Create New Post</h2>
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
}